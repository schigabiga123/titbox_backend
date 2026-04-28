import { PrismaClient } from "@prisma/client"
import admin from "firebase-admin"
import { ensureFirebaseAdminInitialized } from "../firebase/firebase_admin"

type NotificationPayload = {
  title: string
  body: string
}

type SendPushOptions = {
  subTaskId?: string | null
  exceptPush?: boolean
  commentId?: string | null
  finished?: boolean
  deadline?: boolean
}

type LogNotificationInput = {
  userId: string
  notification: NotificationPayload
  taskId: string
  subTaskId?: string | null
  commentId?: string | null
  finished?: boolean
  deadline?: boolean
}

const PUSH_ENABLED = process.env.PUSH_ENABLED === "true"
const prisma = new PrismaClient()
const PUSH_ALLOWED_USER_IDS = new Set(
  (process.env.PUSH_ALLOWED_USER_IDS ?? "")
    .split(",")
    .map((userId) => userId.trim())
    .filter(Boolean)
)

let firebaseInitialized = false
let firebaseDisabled = false
let organizerUserIds: string[] = []

function ensureFirebaseInitialized() {
  if (firebaseInitialized || firebaseDisabled) {
    return
  }

  try {
    ensureFirebaseAdminInitialized()
    firebaseInitialized = true
  } catch (error) {
    firebaseDisabled = true
    console.error("Failed to initialize Firebase admin SDK for notifications", error)
  }
}

function extractUserName(userData: FirebaseFirestore.DocumentData | undefined, fallback: string) {
  const lastName = typeof userData?.lastName === "string" ? userData.lastName.trim() : ""
  const firstName = typeof userData?.firstName === "string" ? userData.firstName.trim() : ""
  const fullName = [lastName, firstName].filter(Boolean).join(" ")
  if (fullName.length > 0) {
    return fullName
  }

  const nameCandidateFields = ["name", "displayName", "fullName", "userName"]
  for (const field of nameCandidateFields) {
    const value = userData?.[field]
    if (typeof value === "string" && value.trim().length > 0) {
      return value.trim()
    }
  }

  return fallback
}

async function resolveUserName(userId: string | null | undefined, fallback = "Valaki") {
  if (!userId) {
    return fallback
  }

  ensureFirebaseInitialized()
  if (!firebaseInitialized) {
    return userId
  }

  try {
    const userDoc = await admin.firestore().collection("users").doc(userId).get()
    return extractUserName(userDoc.data(), userId)
  } catch {
    return fallback
  }
}

async function loadOrganizerUserIds() {
  ensureFirebaseInitialized()
  if (!firebaseInitialized) {
    return []
  }

  if (organizerUserIds.length > 0) {
    return organizerUserIds
  }

  try {
    const roleUsersSnap = await admin
      .firestore()
      .collection("users")
      .where("role", "in", ["organizer", "0ZSlQOqBhtWxDPNvTIRK"])
      .get()

    organizerUserIds = roleUsersSnap.docs.map((doc) => doc.id)
    return organizerUserIds
  } catch (error) {
    console.error("Failed to load organizer user ids for comment notifications", error)
    return []
  }
}

function buildDataPayload(
  notification: NotificationPayload,
  taskId: string,
  options: SendPushOptions
) {
  return {
    title: notification.title,
    body: notification.body,
    taskId,
    ...(options.subTaskId ? { subTaskId: options.subTaskId } : {}),
    ...(options.commentId ? { commentId: options.commentId } : {}),
    ...(options.finished ? { finished: "true" } : {}),
    ...(options.deadline ? { deadline: "true" } : {}),
  }
}

function shouldSendPushToUser(userId: string) {
  if (!PUSH_ENABLED) {
    return false
  }

  if (PUSH_ALLOWED_USER_IDS.size === 0) {
    return true
  }

  return PUSH_ALLOWED_USER_IDS.has(userId)
}

async function logNotification(input: LogNotificationInput) {
  ensureFirebaseInitialized()
  if (!firebaseInitialized) {
    return
  }

  try {
    const notificationRef = admin
      .firestore()
      .collection("users")
      .doc(input.userId)
      .collection("notifications")
      .doc()

    await notificationRef.set({
      id: notificationRef.id,
      title: input.notification.title,
      body: input.notification.body,
      taskId: input.taskId,
      subTaskId: input.subTaskId ?? null,
      commentId: input.commentId ?? null,
      finished: Boolean(input.finished),
      deadline: Boolean(input.deadline),
      sentAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error(`Failed to log notification for user '${input.userId}'`, error)
  }
}

async function logNotificationToDb(input: LogNotificationInput) {
  try {
    await prisma.notificationLog.create({
      data: {
        userId: input.userId,
        notification: input.notification,
        taskId: input.taskId,
        subTaskId: input.subTaskId ?? null,
        commentId: input.commentId ?? null,
        finished: Boolean(input.finished),
        deadline: Boolean(input.deadline),
      },
    })
  } catch (error) {
    console.error(`Failed to log notification to database for user '${input.userId}'`, error)
  }
}

export async function getNotificationsByUserId(userId: string) {
  return prisma.notificationLog.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  })
}

export async function sendPushToUsers(
  taskId: string,
  userIds: string[],
  notification: NotificationPayload,
  options: SendPushOptions = {}
) {
  ensureFirebaseInitialized()

  for (const userId of userIds) {
    if (!userId) {
      continue
    }

    await logNotificationToDb({
      userId,
      notification,
      taskId,
      subTaskId: options.subTaskId,
      commentId: options.commentId,
      finished: options.finished,
      deadline: options.deadline,
    })

    if (!firebaseInitialized) {
      continue
    }

    if (!shouldSendPushToUser(userId)) {
      continue
    }

    const userRef = admin.firestore().collection("users").doc(userId)
    const userSnap = await userRef.get()

    if (!userSnap.exists) {
      continue
    }

    const userData = userSnap.data()
    const tokens = Array.isArray(userData?.fcmTokens)
      ? (userData?.fcmTokens as string[]).filter(
          (token) => typeof token === "string" && token.trim().length > 0
        )
      : []

    await logNotification({
      userId,
      notification,
      taskId,
      subTaskId: options.subTaskId,
      commentId: options.commentId,
      finished: options.finished,
      deadline: options.deadline,
    })

    if (options.exceptPush === true) {
      continue
    }

    if (tokens.length === 0) {
      continue
    }

    const response = await admin.messaging().sendEachForMulticast({
      tokens,
      notification,
      data: buildDataPayload(notification, taskId, options),
    })

    const invalidTokens: string[] = []
    response.responses.forEach((result, index) => {
      if (!result.success) {
        const errorCode = result.error?.code
        if (
          errorCode === "messaging/invalid-registration-token" ||
          errorCode === "messaging/registration-token-not-registered"
        ) {
          invalidTokens.push(tokens[index])
        }
      }
    })

    if (invalidTokens.length > 0) {
      await userRef.update({
        fcmTokens: admin.firestore.FieldValue.arrayRemove(...invalidTokens),
      })
    }
  }
}

type SendCommentCreatedNotificationInput = {
  taskId: string
  subTaskId: string
  taskTitle: string
  commentId: string
  taggedUserIds: string[]
  submittedUserId?: string
}

type SendTaskStatusChangedNotificationInput = {
  taskId: string
  subTaskId: string
  submittedUserId?: string | null
  status: string
  failureDescription?: string | null
}

type SendTaskCreatedNotificationInput = {
  projectId: string
  taskId: string
  taskTitle: string
  userIds: string[]
}

type SendStartDeadlineReminderNotificationInput = {
  projectId: string
  taskId: string
  projectTitle: string
  submittedUserId?: string | null
  assignedUserId?: string | null
}

type SendTaskEventCreatedNotificationInput = {
  projectId: string
  taskId: string
  projectTitle: string
  submittedUserId?: string | null
  eventName: string
  fields: Array<{
    name: string
    data?: string | null
  }>
}

function formatTaskEventFieldsForNotification(
  fields: Array<{
    name: string
    data?: string | null
  }>
) {
  const fieldLines = fields
    .map((field) => {
      const normalizedName = field.name.trim()
      const normalizedData =
        typeof field.data === "string" && field.data.trim().length > 0 ? field.data.trim() : "-"

      return normalizedName.length > 0 ? `${normalizedName}: ${normalizedData}` : null
    })
    .filter((line): line is string => Boolean(line))

  return fieldLines.length > 0 ? fieldLines.join("\n") : "Nincs megadott adat."
}

export async function sendCommentCreatedNotification(
  input: SendCommentCreatedNotificationInput
) {
  const roleUserIds = await loadOrganizerUserIds()
  const uniqueUserIds = [...new Set([...input.taggedUserIds, ...roleUserIds])].filter(Boolean)
  if (uniqueUserIds.length === 0) {
    return
  }

  const senderName = await resolveUserName(input.submittedUserId)

  await sendPushToUsers(
    input.taskId,
    uniqueUserIds,
    {
      title: `Megjegyzést fűztek az ${input.taskTitle} SZF számú feladathoz!`,
      body: `Kattints rá és nézd meg mit írt ${senderName}`,
    },
    {
      subTaskId: input.subTaskId,
      commentId: input.commentId,
    }
  )
}

export async function sendTaskStatusChangedNotification(
  input: SendTaskStatusChangedNotificationInput
) {
  const status = input.status.toLowerCase()
  if (!input.submittedUserId) {
    return
  }

  if (status === "completed") {
    await sendPushToUsers(
      input.taskId,
      [input.submittedUserId],
      {
        title: "Feladat elvégezve",
        body: "Általad felvett feladatot elvégezték.",
      },
      {
        subTaskId: input.subTaskId,
        finished: true,
      }
    )
    return
  }

  if (status === "failed") {

    await sendPushToUsers(
      input.taskId,
      [input.submittedUserId],
      {
        title: "Sikertelen teljesítés",
        body: `Általad felvett feladat sikertelen teljesítése`,
      },
      {
        subTaskId: input.subTaskId,
        finished: true,
      }
    )
  }
}

export async function sendTaskCreatedNotification(
  input: SendTaskCreatedNotificationInput
) {
  const uniqueUserIds = [...new Set(input.userIds)].filter(Boolean)
  if (uniqueUserIds.length === 0) {
    return
  }

  await sendPushToUsers(
    input.projectId,
    uniqueUserIds,
    {
      title: "Új fuvarfeladat!",
      body: `Fuvarfeladatot kaptál! Nézd meg az alkalmazásban.`,
    },
    {
      subTaskId: input.taskId,
    }
  )
}

export async function sendStartDeadlineReminderNotification(
  input: SendStartDeadlineReminderNotificationInput
) {
  const assignedUserName = await resolveUserName(input.assignedUserId, "A sofőr")

  if (input.submittedUserId) {
    await sendPushToUsers(
      input.projectId,
      [input.submittedUserId],
      {
        title: "Az általad szervezet fuvar még nem indult el!",
        body: `Az ${input.projectTitle} SZF számon ${assignedUserName} nem indult még el. Az általad szervezett fuvarnak már több mint két órája el kellett volna indulnia, vedd fel a kapcsolatot a sofőrrel!`,
      },
      {
        subTaskId: input.taskId,
        deadline: true,
      }
    )
  }

  if (input.assignedUserId) {
    await sendPushToUsers(
      input.projectId,
      [input.assignedUserId],
      {
        title: "Feladattal nem indultál még el!",
        body: `A megbeszélt indulási időpont már elmúlt, de az ${input.projectTitle} számú feladattal nem indultál még el!`,
      },
      {
        subTaskId: input.taskId,
        deadline: true,
      }
    )
  }
}

export async function sendTaskEventCreatedNotification(
  input: SendTaskEventCreatedNotificationInput
) {
  if (!input.submittedUserId) {
    return
  }

  await sendPushToUsers(
    input.projectId,
    [input.submittedUserId],
    {
      title: `${input.eventName} - ${input.projectTitle}`,
      body: formatTaskEventFieldsForNotification(input.fields),
    },
    {
      subTaskId: input.taskId,
    }
  )
}
