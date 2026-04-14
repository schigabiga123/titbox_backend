import { PrismaClient } from "@prisma/client"
import dotenv from "dotenv"
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

async function sendStartDeadlineReminders() {
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
      const markAsSentResult = await prisma.task.updateMany({
        where: {
          id: task.id,
          startReminderSentAt: null,
        },
        data: {
          startReminderSentAt: new Date(),
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

      console.log(`Start reminder sent for task ${task.id}`)
    } catch (error) {
      console.error(`Failed to send start reminder for task ${task.id}`, error)
    }
  }
}

void sendStartDeadlineReminders()
  .catch((error) => {
    console.error("Start deadline reminder job failed:", error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
