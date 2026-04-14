import { AttachmentType, PrismaClient } from "@prisma/client"

import admin from "firebase-admin"
import dotenv from "dotenv"

dotenv.config()

const prisma = new PrismaClient()

const FIREBASE_ROOT_COLLECTION = "projects"
const FIREBASE_ROOT_DOC_ID = "rprodPRODprodPRODprod"
const FIREBASE_PROJECTS_SUBCOLLECTION = "projects"
const FIREBASE_PROJECT_LIMIT = 0


const rawServiceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_JSON

if (rawServiceAccount) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(rawServiceAccount) as admin.ServiceAccount),
  })
} else {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  })
}

const db = admin.firestore()
 
type UnknownRecord = Record<string, unknown>
type AttachmentCreateInput = {
  url: string
  type: AttachmentType
  createdAt?: Date
}

const TASK_FIELD_NAME_MAP: Record<string, string> = {
  "ADR cargos": "adr",
  "CMR": "cmr",
  "Lerakodás dátuma": "deliveryDate",
  "Korábbi lerakodás indoklása": "deliveryDesc",
  "Áru súlya": "weight",
  "Áru mennyiség": "quantity",
  "KM óra állás": "km",
  "Plomba": "plomba",
  "Km állás": "km",
  "Pótkocsi": "trailer",
  "Vontató": "truck",
}

function isRecord(value: unknown): value is UnknownRecord {
  return value !== null && typeof value === "object" && !Array.isArray(value)
}

function asRecord(value: unknown): UnknownRecord {
  return isRecord(value) ? value : {}
}

function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : []
}

function asString(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined
}

function asNullableString(value: unknown): string | null {
  return typeof value === "string" ? value : null
}

function asStringArray(value: unknown): string[] {
  return asArray(value)
    .map((item) => asString(item))
    .filter((item): item is string => item !== undefined)
}

function asBoolean(value: unknown): boolean | null {
  if (typeof value === "boolean") {
    return value
  }

  if (typeof value === "string") {
    const normalizedValue = value.toLowerCase()

    if (normalizedValue === "true") {
      return true
    }

    if (normalizedValue === "false") {
      return false
    }
  }

  return null
}

function asNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value
  }

  if (typeof value === "string" && value.length > 0) {
    const parsedValue = Number(value)
    if (Number.isFinite(parsedValue)) {
      return parsedValue
    }
  }

  return null
}

function asDate(value: unknown): Date | null {
  if (value === null || value === undefined) {
    return null
  }

  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value
  }

  if (typeof value === "number") {
    const parsedDate = new Date(value)
    return Number.isNaN(parsedDate.getTime()) ? null : parsedDate
  }

  if (typeof value === "string" && value.length > 0) {
    const parsedDate = new Date(value)
    return Number.isNaN(parsedDate.getTime()) ? null : parsedDate
  }

  if (isRecord(value) && typeof value.toDate === "function") {
    const parsedDate = value.toDate()
    return parsedDate instanceof Date && !Number.isNaN(parsedDate.getTime()) ? parsedDate : null
  }

  return null
}

function asAttachmentType(value: unknown): AttachmentType {
  return value === AttachmentType.photo ? AttachmentType.photo : AttachmentType.file
}

function normalizeTaskFieldName(value: unknown, fallbackName: string): string {
  const fieldName = asString(value)

  if (!fieldName) {
    return fallbackName
  }

  return TASK_FIELD_NAME_MAP[fieldName] ?? fieldName
}

function buildAttachmentCreateManyData(value: unknown): AttachmentCreateInput[] {
  return asArray(value)
    .flatMap((item) => {
      const attachment = asRecord(item)
      const url = asString(attachment.url)

      if (!url) {
        return []
      }

      return [{
        url,
        type: asAttachmentType(attachment.type),
        createdAt: asDate(attachment.createdAt) ?? undefined,
      }]
    })
}

function buildTaskFieldCreateData(value: unknown, taskId: string) {
  return asArray(value)
    .map((item, index) => {
      const field = asRecord(item)
      const fallbackName = `Migrated field ${index + 1}`

      return {
        sourceId: asString(field.id),
        taskId,
        pocketId: asNullableString(field.pocketId) ?? asNullableString(field.id),
        name: normalizeTaskFieldName(field.name, fallbackName),
        data: asNullableString(field.data),
        type: asNullableString(field.type),
        attachments: buildAttachmentCreateManyData(field.attachments),
      }
    })
}

function buildCommentCreateData(value: unknown, taskId: string) {
  return asArray(value)
    .map((item) => {
      const comment = asRecord(item)
      const taggedUsers = asStringArray(comment.taggedUserIds)
      const attachments = buildAttachmentCreateManyData(comment.attachments)

      return {
        taskId,
        text: typeof comment.text === "string" ? comment.text : "",
        submittedUserId: asNullableString(comment.submittedUserId),
        createdAt: asDate(comment.createdAt),
        taggedUsers,
        attachments,
      }
    })
}

function buildInspectionCreateData(value: unknown, taskId: string) {
  return asArray(value)
    .map((item, index) => {
      const inspection = asRecord(item)

      return {
        taskId,
        key: asString(inspection.key) ?? asString(inspection.id) ?? `inspection_${index + 1}`,
        checked: asBoolean(inspection.checked) ?? false,
        note: asNullableString(inspection.note),
        data: asNullableString(inspection.data),
      }
    })
}

function buildTaskEventCreateData(value: unknown, taskId: string) {
  return asArray(value)
    .map((item, eventIndex) => {
      const event = asRecord(item)

      return {
        taskId,
        name: asNullableString(event.name),
        createdAt: asDate(event.createdAt),
        fields: asArray(event.fields).map((fieldItem, fieldIndex) => {
          const field = asRecord(fieldItem)

          return {
            name: asString(field.name) ?? `Migrated event field ${fieldIndex + 1}`,
            data: asNullableString(field.data),
            type: asNullableString(field.type),
            attachments: buildAttachmentCreateManyData(field.attachments),
          }
        }),
        fallbackName: `Migrated event ${eventIndex + 1}`,
      }
    })
}

async function migrateProject(
  projectDoc: admin.firestore.QueryDocumentSnapshot,
  projectIndex: number,
  totalProjects: number
) {
  const projectData = asRecord(projectDoc.data())
  const projectId = asString(projectData.id) ?? projectDoc.id

  console.log(`Migrating project ${projectIndex}/${totalProjects}: ${projectId}`)

  const createdProject = await prisma.project.create({
    data: {
      partnerName: asNullableString(projectData.partnerName),
      pocketId: asNullableString(projectData.pocketId),
      title: asString(projectData.title) ?? projectDoc.id,
      updatedAt: asDate(projectData.updatedAt),
    },
  })

  const tasks = asArray(projectData.tasks)
  const totalTasks = tasks.length

  for (const [taskIndex, taskItem] of tasks.entries()) {
    const task = asRecord(taskItem)
    const taskId = asString(task.id)
    const taskComments = buildCommentCreateData(task.comments, "")
    const hasLibra = Object.keys(asRecord(task.libra)).length > 0
    const hasPortaChecklist = Object.keys(asRecord(task.portaChecklist)).length > 0

    const createdTask = await prisma.task.create({
      data: {
        groupId: taskId ?? `migrated_task_${taskIndex + 1}`,
        projectId: createdProject.id,
        title: asString(task.title) ?? `Migrated task ${taskIndex + 1}`,
        desc: asNullableString(task.desc),
        status: asNullableString(task.status),
        deadline: asDate(task.deadline),
        createdAt: asDate(task.createdAt),
        fullAddress: asNullableString(task.fullAddress),
        lat: asNumber(task.lat),
        lng: asNumber(task.lng),
        isPickUp: asBoolean(task.isPickUp),
        accepted: asBoolean(task.accepted),
        hanging: asBoolean(task.hanging),
        assignedUserId: asNullableString(task.assignedUserId),
        assignedUserId2: asNullableString(task.assignedUserId2),
        submittedUserId: asNullableString(task.submittedUserId),
      },
    })

    const taskFieldIdMap = new Map<string, string>()
    const taskFields = buildTaskFieldCreateData(task.fields, createdTask.id)

    for (const field of taskFields) {
      const createdField = await prisma.taskField.create({
        data: {
          taskId: field.taskId,
          pocketId: field.pocketId,
          name: field.name,
          data: field.data,
          type: field.type,
          attachments:
            field.attachments.length > 0
              ? {
                  create: field.attachments,
                }
              : undefined,
        },
      })

      if (field.sourceId) {
        taskFieldIdMap.set(field.sourceId, createdField.id)
      }
    }

    const shouldCreateDefaultPlombaField =
      createdTask.isPickUp === false && !taskFields.some((field) => field.name === "plomba")

    if (shouldCreateDefaultPlombaField) {
      await prisma.taskField.create({
        data: {
          taskId: createdTask.id,
          name: "plomba",
          type: "text",
        },
      })
    }

    if (taskComments.length > 0) {
      console.log(
        `[project ${projectIndex}/${totalProjects}][task ${taskIndex + 1}/${totalTasks}] Project with comments migrated: projectId=${createdProject.id}, taskId=${createdTask.id}, comments=${taskComments.length}`
      )
    }

    for (const comment of taskComments.map((comment) => ({
      ...comment,
      taskId: createdTask.id,
    }))) {
      await prisma.comment.create({
        data: {
          taskId: comment.taskId,
          text: comment.text,
          submittedUserId: comment.submittedUserId,
          createdAt: comment.createdAt,
          taggedUsers:
            comment.taggedUsers.length > 0
              ? {
                  create: comment.taggedUsers.map((userId) => ({
                    userId,
                  })),
                }
              : undefined,
          attachments:
            comment.attachments.length > 0
              ? {
                  create: comment.attachments,
                }
              : undefined,
        },
      })
    }

    for (const inspection of buildInspectionCreateData(task.inspections, createdTask.id)) {
      await prisma.inspection.create({
        data: inspection,
      })
    }

    const portaChecklist = asRecord(task.tripChecklist)
    if (Object.keys(portaChecklist).length > 0) {
      if (hasPortaChecklist) {
        console.log(
          `[project ${projectIndex}/${totalProjects}][task ${taskIndex + 1}/${totalTasks}] Project with porta checklist migrated: projectId=${createdProject.id}, taskId=${createdTask.id}`
        )
      }

      await prisma.portaChecklist.create({
        data: {
          taskId: createdTask.id,
          isUserChecked: asBoolean(portaChecklist.isUserChecked),
          isTruckChecked: asBoolean(portaChecklist.isTruckChecked),
          isTrailerChecked: asBoolean(portaChecklist.isTrailerChecked),
          isTraktorChecked: asBoolean(portaChecklist.isTraktorChecked),
          isBioChecked: asBoolean(portaChecklist.isBioChecked),
          isSzondaChecked: asBoolean(portaChecklist.isSzondaChecked),
          isStarted: asBoolean(portaChecklist.isStarted),
          startedAt: asDate(portaChecklist.startedAt),
        },
      })
    }

    const libra = asRecord(task.libra)
    if (Object.keys(libra).length > 0) {
      if (hasLibra) {
        console.log(
          `[project ${projectIndex}/${totalProjects}][task ${taskIndex + 1}/${totalTasks}] Project with libra migrated: projectId=${createdProject.id}, taskId=${createdTask.id}`
        )
      }

      const taskFieldId = asString(libra.taskFieldId)
      const libraPlomba = asRecord(libra.plomba)
      let resolvedLibraTaskFieldId = taskFieldId
        ? taskFieldIdMap.get(taskFieldId) ?? null
        : null

      if (Object.keys(libraPlomba).length > 0) {
        const createdPlombaField = await prisma.taskField.create({
          data: {
            taskId: createdTask.id,
            name: "plombaLibra",
            type: "text",
            data: asNullableString(libraPlomba.data),
            attachments:
              buildAttachmentCreateManyData(libraPlomba.attachments).length > 0
                ? {
                    create: buildAttachmentCreateManyData(libraPlomba.attachments),
                  }
                : undefined,
          },
        })

        resolvedLibraTaskFieldId = createdPlombaField.id
      }

      await prisma.libra.create({
        data: {
          projectId: createdProject.id,
          taskId: createdTask.id,
          szfCode: asNullableString(libra.projecttitle),
          plateNumber: asNullableString(libra.truckplatenumber),
          assignedUserId: asNullableString(libra.assignedUserId),
          amount: asNumber(libra.amount),
          manuallyLibra: asNullableString(libra.manuallyLibra),
          manuallyLibraComment: asNullableString(libra.manuallyLibraComment),
          taskFieldId: resolvedLibraTaskFieldId,
        },
      })
    }

    for (const event of buildTaskEventCreateData(task.events, createdTask.id)) {
      await prisma.taskEvent.create({
        data: {
          taskId: createdTask.id,
          name: event.name ?? event.fallbackName,
          createdAt: event.createdAt,
          fields:
            event.fields.length > 0
              ? {
                  create: event.fields.map((field) => ({
                    name: field.name,
                    data: field.data,
                    type: field.type,
                    attachments:
                      field.attachments.length > 0
                        ? {
                            create: field.attachments,
                          }
                        : undefined,
                  })),
                }
              : undefined,
        },
      })
    }
  }
}

async function migrateProjects() {
  console.log("Starting Firebase -> Postgres migration")

  let query: FirebaseFirestore.Query = db
    .collection(FIREBASE_ROOT_COLLECTION)
    .doc(FIREBASE_ROOT_DOC_ID)
    .collection(FIREBASE_PROJECTS_SUBCOLLECTION)

  if (FIREBASE_PROJECT_LIMIT > 0) {
    query = query.limit(FIREBASE_PROJECT_LIMIT)
  }

  const snapshot = await query.get()

  if (snapshot.empty) {
    console.log("No projects found in Firebase")
    return
  }

  let i = 0;

  for (const [projectIndex, projectDoc] of snapshot.docs.entries()) {
    const projectData = asRecord(projectDoc.data())
    const title = asString(projectData.title) ?? projectDoc.id;
    if(true){ //i<500 //title == 'SZF-26-0005121'
      await migrateProject(projectDoc, projectIndex + 1, snapshot.docs.length)
      i++;
    }
  }

  console.log(`Migration completed successfully. Migrated ${snapshot.docs.length} project(s).`)
}

migrateProjects()
  .catch((error) => {
    console.error("Migration failed:", error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
