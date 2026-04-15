import { PrismaClient } from "@prisma/client"
import dotenv from "dotenv"
import { randomUUID } from "crypto"
import { sendStartDeadlineReminderNotification } from "../services/notification.service"

dotenv.config()

const prisma = new PrismaClient()

const APP_TIME_ZONE = "Europe/Budapest"
const KORNYE_ADDRESS = "Környe Tópart 1."
const REMINDER_LEAD_TIME_MS = 2 * 60 * 60 * 1000
const REMINDER_MIN_DEADLINE = new Date("2026-04-04T00:00:00+02:00")

function getTimeZoneOffsetMs(referenceDate: Date, timeZone: string) {
  const timeZoneDate = new Date(referenceDate.toLocaleString("en-US", { timeZone }))
  const utcDate = new Date(referenceDate.toLocaleString("en-US", { timeZone: "UTC" }))

  return timeZoneDate.getTime() - utcDate.getTime()
}

function createReminderThreshold(referenceDate = new Date()) {
  const timeZoneOffsetMs = getTimeZoneOffsetMs(referenceDate, APP_TIME_ZONE)
  return new Date(referenceDate.getTime() + timeZoneOffsetMs - REMINDER_LEAD_TIME_MS)
}

export async function sendStartDeadlineReminders() {
  const reminderThreshold = createReminderThreshold()

  console.log('reminderThreshold',reminderThreshold.toLocaleString("sv-SE", {
    timeZone: "Europe/Budapest",
  }))

  const tasks = await prisma.task.findMany({
    where: {
      isPickUp: true,
      fullAddress: KORNYE_ADDRESS,
      deadline: {
        gte: REMINDER_MIN_DEADLINE,
        lte: reminderThreshold,
      },
      startReminderSentAt: null,
      OR: [
        {
          portaChecklist: null,
        },
        {
          portaChecklist: {
            is: {
              isStarted: {
                not: true,
              },
            },
          },
        },
      ],
    },
    select: {
      id: true,
      projectId: true,
      project: {
        select: {
          title: true,
        },
      },
      assignedUserId: true,
      submittedUserId: true,
    },
  })

  console.log(`Start deadline reminder candidates: ${tasks.length}`)

  for (const task of tasks) {
    try {
      const sentAt = new Date()

      const markAsSentResult = await prisma.task.updateMany({
        where: {
          id: task.id,
          startReminderSentAt: null,
        },
        data: {
          startReminderSentAt: sentAt,
        },
      })

      if (markAsSentResult.count === 0) {
        continue
      }

      await sendStartDeadlineReminderNotification({
        projectId: task.projectId,
        taskId: task.id,
        projectTitle: task.project.title,
        submittedUserId: task.submittedUserId,
        assignedUserId: task.assignedUserId,
      })

      const reminderRecipients = [
        task.submittedUserId
          ? { userId: task.submittedUserId, recipientRole: "submittedUser" }
          : null,
        task.assignedUserId
          ? { userId: task.assignedUserId, recipientRole: "assignedUser" }
          : null,
      ].filter((recipient): recipient is { userId: string; recipientRole: string } => Boolean(recipient))

      if (reminderRecipients.length > 0) {
        await prisma.$transaction(
          reminderRecipients.map((recipient) =>
            prisma.$executeRaw`
              INSERT INTO "StartDeadlineReminderLog" ("id", "createdAt", "sentAt", "taskId", "projectId", "userId", "recipientRole")
              VALUES (${randomUUID()}, NOW(), ${sentAt}, ${task.id}, ${task.projectId}, ${recipient.userId}, ${recipient.recipientRole})
            `
          )
        )
      }

      console.log(`Start reminder sent for task ${task.id}`)
    } catch (error) {
      console.error(`Failed to send start reminder for task ${task.id}`, error)
    }
  }

  return {
    candidateCount: tasks.length,
    reminderThreshold: reminderThreshold.toISOString(),
  }
}

export async function runStartDeadlineReminderJob() {
  try {
    return await sendStartDeadlineReminders()
  } finally {
    await prisma.$disconnect()
  }
}

if (require.main === module) {
  void runStartDeadlineReminderJob()
    .catch((error) => {
      console.error("Start deadline reminder job failed:", error)
      process.exitCode = 1
    })
}
