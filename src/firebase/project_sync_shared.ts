import { PrismaClient } from "@prisma/client"
import admin from "firebase-admin"
import dotenv from "dotenv"
import { randomUUID } from "crypto"
import { sendTaskCreatedNotification } from "../services/notification.service"
import serviceAccount from "./serviceAccount.json"

dotenv.config()

const prisma = new PrismaClient()

type ApiTask = {
  projectid?: string | number | null
  projecttitle?: string | null
  projectpartnername?: string | null
  id?: string | number | null
  title?: string | null
  desc?: string | null
  createdat?: string | null
  deadline?: string | null
  submitteduserid?: string | number | null
  assigneduserid?: string | number | null
  assigneduserid2?: string | number | null
  fulladdress?: string | null
  lat?: string | number | null
  lng?: string | number | null
  ispickup?: boolean | null
  accepted?: boolean | null
  group?: string | number | null
  hanging?: boolean | null
  trailerid?: string | number | null
  trailerplatenumber?: string | null
  truckid?: string | number | null
  truckplatenumber?: string | null
  adrcargos?: boolean | string | number | null
}

type ApiResponse = {
  value?: ApiTask[]
}

type UserMap = Record<string, string>

type SyncProjectTasksStats = {
  createdTasks: number
  updatedTasks: number
  updatedTaskFields: number
  skippedBecauseAccepted: boolean
  changeDetails: {
    tasks: Array<Record<string, unknown>>
    taskFields: Array<Record<string, unknown>>
  }
}

type ProjectSyncItemStats = {
  projectId: string | null
  pocketProjectId: string | null
  projectTitle: string
  success: boolean
  skipped: boolean
  skippedReason: string | null
  createdProjects: number
  updatedProjects: number
  createdTasks: number
  updatedTasks: number
  updatedTaskFields: number
  skippedTaskSync: boolean
  errorMessage: string | null
  changeDetails: Record<string, unknown> | null
}

export type ProjectSyncStats = {
  processedProjects: number
  createdProjects: number
  updatedProjects: number
  createdTasks: number
  updatedTasks: number
  updatedTaskFields: number
  skippedProjects: number
  skippedTaskSyncProjects: number
  selectedProjectTitle: string | null
  projectId: string | null
}

type RunProjectSyncOptions = {
  apiUrls: readonly string[]
  runnerName: string
  scheduleType: "minute" | "quarter_hour"
}

const DEFAULT_SUBMITTED_USER_ID = "dIooTXz9TZX3t2HZrpKi3GMNKDy2"

function ensureFirebaseInitialized() {
  if (admin.apps.length > 0) {
    return
  }

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  })
}

function asNonEmptyString(value: unknown): string | null {
  if (typeof value !== "string" || value.length === 0) {
    return null
  }
  return value
}

function asString(value: unknown): string | null {
  if (value === null || value === undefined) {
    return null
  }

  if (typeof value === "string") {
    return value.length > 0 ? value : null
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value)
  }

  return null
}

function asNullableString(value: unknown): string | null {
  return typeof value === "string" ? value : null
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
    return Number.isFinite(parsedValue) ? parsedValue : null
  }

  return null
}

function asDate(value: unknown): Date | null {
  if (typeof value !== "string" || value.length === 0) {
    return null
  }

  const parsedDate = new Date(value)
  return Number.isNaN(parsedDate.getTime()) ? null : parsedDate
}

function asBooleanString(value: unknown): string | null {
  const parsedValue = asBoolean(value)
  return parsedValue === null ? null : String(parsedValue)
}

function resolveFirebaseUserId(
  pocketUserId: string | number | null | undefined,
  userMap: UserMap,
  fallbackUserId?: string
): string | number | null | undefined {
  const normalizedPocketUserId = asString(pocketUserId)
  if (!normalizedPocketUserId) {
    return fallbackUserId ?? pocketUserId
  }

  return userMap[normalizedPocketUserId] ?? fallbackUserId ?? normalizedPocketUserId
}

function toNullableUserId(value: string | number | null | undefined): string | null {
  if (value === null || value === undefined) {
    return null
  }

  return String(value)
}

function buildTaskCreateInput(item: ApiTask, projectId: string, userMap: UserMap) {
  const externalTaskId = asString(item.id)

  if (!externalTaskId) {
    return null
  }

  return {
    groupId: externalTaskId,
    projectId,
    title: asNonEmptyString(item.title) ?? `Task ${externalTaskId}`,
    desc: asString(item.desc),
    status: "todo",
    deadline: asDate(item.deadline),
    createdAt: asDate(item.createdat),
    fullAddress: asNullableString(item.fulladdress),
    lat: asNumber(item.lat),
    lng: asNumber(item.lng),
    isPickUp: asBoolean(item.ispickup),
    accepted: asBoolean(item.accepted),
    hanging: asBoolean(item.hanging),
    assignedUserId: toNullableUserId(resolveFirebaseUserId(item.assigneduserid, userMap)),
    assignedUserId2: toNullableUserId(resolveFirebaseUserId(item.assigneduserid2, userMap)),
    submittedUserId: toNullableUserId(
      resolveFirebaseUserId(item.submitteduserid, userMap, DEFAULT_SUBMITTED_USER_ID)
    ),
    //assignedUserId: "ow4joi0ZamcKjOYmD0x8qGR7fPg1",
    //submittedUserId: "FuB9xHix9PSkEM6zuNGHWuMiYSP2",
  }
}

function buildGeneratedTaskFields(item: ApiTask) {
  const isPickUp = asBoolean(item.ispickup)

  if (isPickUp === null) {
    return []
  }

  const fields: Array<{
    pocketId: string | null
    name: string
    type: string
    data: string | null
  }> = []

  if (isPickUp) {
    if (item.trailerid !== null && item.trailerid !== undefined) {
      fields.push({
        pocketId: asString(item.trailerid),
        name: "trailer",
        type: "text",
        data: asString(item.trailerplatenumber),
      })
    }

    if (item.truckid !== null && item.truckid !== undefined) {
      fields.push({
        pocketId: asString(item.truckid),
        name: "truck",
        type: "text",
        data: asString(item.truckplatenumber),
      })
    }

    fields.push({
      pocketId: null,
      name: "km",
      type: "number",
      data: null,
    })

    fields.push({
      pocketId: null,
      name: "cmr",
      type: "photo",
      data: "-",
    })

    fields.push({
      pocketId: null,
      name: "adr",
      type: "text",
      data: asBooleanString(item.adrcargos),
    })

    fields.push({
      pocketId: null,
      name: "plomba",
      type: "text",
      data: null,
    })

    fields.push({
      pocketId: null,
      name: "weight",
      type: "number",
      data: null,
    })

    fields.push({
      pocketId: null,
      name: "quantity",
      type: "number",
      data: null,
    })

    return fields
  }

  fields.push({
    pocketId: null,
    name: "cmr",
    type: "photo",
    data: "-",
  })

  fields.push({
    pocketId: null,
    name: "km",
    type: "number",
    data: null,
  })

  fields.push({
    pocketId: null,
    name: "deliveryDate",
    type: "date",
    data: null,
  })

  fields.push({
    pocketId: null,
    name: "deliveryDesc",
    type: "picker",
    data: null,
  })

  fields.push({
    pocketId: null,
    name: "plomba",
    type: "text",
    data: null,
  })

  return fields
}

function buildVehicleFieldUpdates(item: ApiTask) {
  return [
    {
      name: "trailer",
      pocketId: asString(item.trailerid),
      data: asString(item.trailerplatenumber),
    },
    {
      name: "truck",
      pocketId: asString(item.truckid),
      data: asString(item.truckplatenumber),
    },
  ].filter((field) => field.pocketId !== null || field.data !== null)
}

function areDatesEqual(left: Date | null | undefined, right: Date | null | undefined) {
  if (!left && !right) {
    return true
  }

  if (!left || !right) {
    return false
  }

  return left.getTime() === right.getTime()
}

function normalizeAssignedUserId2ForComparison(value: string | null | undefined) {
  return value === null || value === "-" ? "-" : value
}

function shouldUpdateTask(
  existingTask: {
    title: string
    desc: string | null
    deadline: Date | null
    createdAt: Date | null
    fullAddress: string | null
    lat: number | null
    lng: number | null
    isPickUp: boolean | null
    accepted: boolean | null
    hanging: boolean | null
    assignedUserId: string | null
    assignedUserId2: string | null
    submittedUserId: string | null
  },
  nextTask: {
    title: string
    desc: string | null
    deadline: Date | null
    createdAt: Date | null
    fullAddress: string | null
    lat: number | null
    lng: number | null
    isPickUp: boolean | null
    accepted: boolean | null
    hanging: boolean | null
    assignedUserId: string | null
    assignedUserId2: string | null
    submittedUserId: string | null
  }
) {
  return (
    existingTask.title !== nextTask.title ||
    existingTask.desc !== nextTask.desc ||
    !areDatesEqual(existingTask.deadline, nextTask.deadline) ||
    !areDatesEqual(existingTask.createdAt, nextTask.createdAt) ||
    existingTask.fullAddress !== nextTask.fullAddress ||
    existingTask.lat !== nextTask.lat ||
    existingTask.lng !== nextTask.lng ||
    existingTask.isPickUp !== nextTask.isPickUp ||
    existingTask.accepted !== nextTask.accepted ||
    existingTask.hanging !== nextTask.hanging ||
    existingTask.assignedUserId !== nextTask.assignedUserId ||
    normalizeAssignedUserId2ForComparison(existingTask.assignedUserId2) !==
      normalizeAssignedUserId2ForComparison(nextTask.assignedUserId2) ||
    existingTask.submittedUserId !== nextTask.submittedUserId
  )
}

function shouldUpdateProject(
  existingProject: {
    title: string
    partnerName: string | null
  },
  nextProject: {
    title: string
    partnerName: string | null
  }
) {
  return (
    existingProject.title !== nextProject.title ||
    existingProject.partnerName !== nextProject.partnerName
  )
}

function shouldUpdateField(
  existingField: {
    pocketId: string | null
    data: string | null
  },
  nextField: {
    pocketId: string | null
    data: string | null
  }
) {
  return existingField.pocketId !== nextField.pocketId || existingField.data !== nextField.data
}

function serializeDiffValue(value: unknown) {
  if (value instanceof Date) {
    return value.toISOString()
  }

  return value
}

function buildFieldChanges(
  previousValues: Record<string, unknown>,
  nextValues: Record<string, unknown>
) {
  const changes: Array<{
    field: string
    before: unknown
    after: unknown
  }> = []

  for (const field of Object.keys(nextValues)) {
    const beforeValue =
      field === "assignedUserId2"
        ? normalizeAssignedUserId2ForComparison(previousValues[field] as string | null | undefined)
        : previousValues[field]
    const afterValue =
      field === "assignedUserId2"
        ? normalizeAssignedUserId2ForComparison(nextValues[field] as string | null | undefined)
        : nextValues[field]
    const before = serializeDiffValue(beforeValue)
    const after = serializeDiffValue(afterValue)

    if (JSON.stringify(before) === JSON.stringify(after)) {
      continue
    }

    changes.push({
      field,
      before,
      after,
    })
  }

  return changes
}

async function fetchAllApiData(apiUrls: readonly string[]) {
  console.log("Fetching task data from external API...")

  const responses = await Promise.all(
    apiUrls.map(async (url) => {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`API request failed with ${response.status} for ${url}`)
      }

      return (await response.json()) as ApiResponse
    })
  )

  const allResults: ApiTask[] = []

  for (const apiResult of responses) {
    if (Array.isArray(apiResult.value)) {
      allResults.push(...apiResult.value)
    }
  }

  return allResults
}

async function loadFirebaseUserMap() {
  ensureFirebaseInitialized()

  const snapshot = await admin.firestore().collection("users").get()
  const userMap: UserMap = {}

  snapshot.forEach((doc) => {
    const data = doc.data()
    const pocketUserId = asString(data.pocketUserId)

    if (pocketUserId) {
      userMap[pocketUserId] = doc.id
    }
  })

  return userMap
}

function groupTasksByProject(items: ApiTask[]) {
  const grouped = new Map<string, ApiTask[]>()

  for (const item of items) {
    const projectTitle = asNonEmptyString(item.projecttitle)
    if (!projectTitle) {
      continue
    }

    if (!grouped.has(projectTitle)) {
      grouped.set(projectTitle, [])
    }

    grouped.get(projectTitle)?.push(item)
  }

  return [...grouped.entries()].sort(([left], [right]) => left.localeCompare(right))
}

function selectProjects(groupedProjects: Array<[string, ApiTask[]]>) {
  return groupedProjects
}

async function syncProjectTasks(
  projectId: string,
  items: ApiTask[],
  userMap: UserMap
): Promise<SyncProjectTasksStats> {
  const existingProjectTasks = await prisma.task.findMany({
    where: {
      projectId,
    },
    select: {
      id: true,
      isPickUp: true,
      accepted: true,
    },
  })

  const pickUpTasks = existingProjectTasks.filter((task) => task.isPickUp === true)
  const hasAcceptedPickUpTask = pickUpTasks.some((task) => task.accepted == true)

  if (hasAcceptedPickUpTask) {
    console.log(
      `Skipping task sync for project ${projectId} because at least one pickup task already has accepted set.`
    )
    return {
      createdTasks: 0,
      updatedTasks: 0,
      updatedTaskFields: 0,
      skippedBecauseAccepted: true,
      changeDetails: {
        tasks: [],
        taskFields: [],
      },
    }
  }

  let createdTasks = 0
  let updatedTasks = 0
  let updatedTaskFields = 0
  const taskChanges: Array<Record<string, unknown>> = []
  const taskFieldChanges: Array<Record<string, unknown>> = []

  for (const item of items) {
    const taskData = buildTaskCreateInput(item, projectId, userMap)
    if (!taskData) {
      console.warn("Skipping task because external id is missing", item)
      continue
    }

    const existingTask = await prisma.task.findFirst({
      where: {
        projectId,
        groupId: taskData.groupId,
      },
      select: {
        id: true,
        title: true,
        desc: true,
        deadline: true,
        createdAt: true,
        fullAddress: true,
        lat: true,
        lng: true,
        isPickUp: true,
        accepted: true,
        hanging: true,
        assignedUserId: true,
        assignedUserId2: true,
        submittedUserId: true,
      },
    })

    if (!existingTask) {
      const createdTask = await prisma.task.create({
        data: taskData,
      })
      createdTasks += 1
      taskChanges.push({
        action: "created",
        taskId: createdTask.id,
        groupId: createdTask.groupId,
        changes: buildFieldChanges(
          {},
          {
            title: taskData.title,
            desc: taskData.desc,
            deadline: taskData.deadline,
            createdAt: taskData.createdAt,
            fullAddress: taskData.fullAddress,
            lat: taskData.lat,
            lng: taskData.lng,
            isPickUp: taskData.isPickUp,
            accepted: taskData.accepted,
            hanging: taskData.hanging,
            assignedUserId: taskData.assignedUserId,
            assignedUserId2: taskData.assignedUserId2,
            submittedUserId: taskData.submittedUserId,
          }
        ),
      })

      const generatedFields = buildGeneratedTaskFields(item)

      if (generatedFields.length > 0) {
        await prisma.taskField.createMany({
          data: generatedFields.map((field) => ({
            taskId: createdTask.id,
            pocketId: field.pocketId,
            name: field.name,
            type: field.type,
            data: field.data,
          })),
        })
      }

      if (createdTask.isPickUp === true) {
        const taskNotificationUserIds = [createdTask.assignedUserId].filter(
          (userId): userId is string => Boolean(userId)
        )

        try {
          await sendTaskCreatedNotification({
            projectId,
            taskId: createdTask.id,
            taskTitle: createdTask.title,
            userIds: taskNotificationUserIds,
          })
        } catch (error) {
          console.error("Failed to send task created notification push", error)
        }
      }
      continue
    }

    const shouldUpdateExistingTask = shouldUpdateTask(existingTask, taskData)

    if (shouldUpdateExistingTask) {
      /*console.log("Task update debug", {
        existingTask,
        taskData,
      })*/
      const taskDiff = buildFieldChanges(existingTask, taskData)

      await prisma.task.update({
        where: {
          id: existingTask.id,
        },
        data: {
          title: taskData.title,
          desc: taskData.desc,
          deadline: taskData.deadline,
          createdAt: taskData.createdAt,
          fullAddress: taskData.fullAddress,
          lat: taskData.lat,
          lng: taskData.lng,
          isPickUp: taskData.isPickUp,
          accepted: taskData.accepted,
          hanging: taskData.hanging,
          assignedUserId: taskData.assignedUserId,
          assignedUserId2: taskData.assignedUserId2,
          submittedUserId: taskData.submittedUserId,
        },
      })
      updatedTasks += 1
      taskChanges.push({
        action: "updated",
        taskId: existingTask.id,
        groupId: taskData.groupId,
        changes: taskDiff,
      })
    }

    const vehicleFieldUpdates = buildVehicleFieldUpdates(item)

    for (const fieldUpdate of vehicleFieldUpdates) {
      const existingField = await prisma.taskField.findFirst({
        where: {
          taskId: existingTask.id,
          name: fieldUpdate.name,
        },
      })

      if (!existingField) {
        continue
      }

      const shouldUpdateExistingField = shouldUpdateField(
        {
          pocketId: existingField.pocketId,
          data: existingField.data,
        },
        {
          pocketId: fieldUpdate.pocketId,
          data: fieldUpdate.data,
        }
      )

      if (!shouldUpdateExistingField) {
        continue
      }

      const fieldDiff = buildFieldChanges(
        {
          pocketId: existingField.pocketId,
          data: existingField.data,
        },
        {
          pocketId: fieldUpdate.pocketId,
          data: fieldUpdate.data,
        }
      )

      await prisma.taskField.update({
        where: {
          id: existingField.id,
        },
        data: {
          pocketId: fieldUpdate.pocketId,
          data: fieldUpdate.data,
        },
      })
      updatedTaskFields += 1
      taskFieldChanges.push({
        action: "updated",
        taskFieldId: existingField.id,
        taskId: existingTask.id,
        name: existingField.name,
        changes: fieldDiff,
      })
    }
  }

  return {
    createdTasks,
    updatedTasks,
    updatedTaskFields,
    skippedBecauseAccepted: false,
    changeDetails: {
      tasks: taskChanges,
      taskFields: taskFieldChanges,
    },
  }
}

export async function runProjectSync({
  apiUrls,
  runnerName,
  scheduleType,
}: RunProjectSyncOptions): Promise<ProjectSyncStats> {
  const startedAt = new Date()
  console.log(`[${runnerName}] Task sync started at ${startedAt.toISOString()}`)

  const stats: ProjectSyncStats = {
    processedProjects: 0,
    createdProjects: 0,
    updatedProjects: 0,
    createdTasks: 0,
    updatedTasks: 0,
    updatedTaskFields: 0,
    skippedProjects: 0,
    skippedTaskSyncProjects: 0,
    selectedProjectTitle: null,
    projectId: null,
  }
  let isSuccess = false
  let errorMessage: string | null = null
  const projectItems: ProjectSyncItemStats[] = []

  try {
    const mergedData = await fetchAllApiData(apiUrls)
    const userMap = await loadFirebaseUserMap()
    const groupedProjects = groupTasksByProject(mergedData)
    const selectedProjects = selectProjects(groupedProjects)

    console.log(`[${runnerName}] Projects received from API: ${groupedProjects.length}`)

    if (selectedProjects.length === 0) {
      console.warn(`[${runnerName}] No matching project found for the current project filter.`)
      stats.skippedProjects += 1
      return stats
    }

    stats.selectedProjectTitle =
      selectedProjects.length === 1 ? selectedProjects[0]?.[0] ?? null : "ALL_PROJECTS"

    console.log(`[${runnerName}] Matching projects to sync: ${selectedProjects.length}`)

    let i = 0;

    for (const [projectTitle, items] of selectedProjects) {
      //console.log(`[${runnerName}] Syncing project: ${projectTitle}`)

      const firstTask = items[0]
      if (!firstTask) {
        stats.skippedProjects += 1
        projectItems.push({
          projectId: null,
          pocketProjectId: null,
          projectTitle,
          success: false,
          skipped: true,
          skippedReason: "Missing first task",
          createdProjects: 0,
          updatedProjects: 0,
          createdTasks: 0,
          updatedTasks: 0,
          updatedTaskFields: 0,
          skippedTaskSync: false,
          errorMessage: null,
          changeDetails: null,
        })
        continue
      }

      const pocketProjectId = asString(firstTask.projectid)
      if (!pocketProjectId) {
        console.warn(`[${runnerName}] Skipping project "${projectTitle}" because projectid is missing`)
        stats.skippedProjects += 1
        projectItems.push({
          projectId: null,
          pocketProjectId: null,
          projectTitle,
          success: false,
          skipped: true,
          skippedReason: "Missing pocket project id",
          createdProjects: 0,
          updatedProjects: 0,
          createdTasks: 0,
          updatedTasks: 0,
          updatedTaskFields: 0,
          skippedTaskSync: false,
          errorMessage: null,
          changeDetails: null,
        })
        continue
      }

      try {
        const partnerName = asString(firstTask.projectpartnername)

        let project = await prisma.project.findFirst({
          where: {
            pocketId: pocketProjectId,
          },
          select: {
            id: true,
            title: true,
            partnerName: true,
          },
        })

        let createdProjects = 0
        let updatedProjects = 0
        let projectChanges: Array<Record<string, unknown>> = []

        if (!project) {
          //console.log(
          //  `[${runnerName}] Skipping new project during test run: ${projectTitle} (pocketId=${pocketProjectId})`
          //)
          if(i == 10){
            project = await prisma.project.create({
            data: {
              pocketId: pocketProjectId,
              title: projectTitle,
              partnerName,
              updatedAt: new Date(),
            },
          })
          createdProjects = 1
          stats.createdProjects += 1
          projectChanges = buildFieldChanges(
            {},
            {
              title: projectTitle,
              partnerName,
            }
          )
            console.log(`[${runnerName}] Created new project: ${projectTitle}`)
            i++;
          } else {
            continue;
          }
        } else {
          console.log('UPDATING - ',projectTitle);
          const shouldUpdateExistingProject = shouldUpdateProject(project, {
            title: projectTitle,
            partnerName,
          })

          if (shouldUpdateExistingProject) {
            projectChanges = buildFieldChanges(
              {
                title: project.title,
                partnerName: project.partnerName,
              },
              {
                title: projectTitle,
                partnerName,
              }
            )

            project = await prisma.project.update({
              where: {
                id: project.id,
              },
              data: {
                title: projectTitle,
                partnerName,
                updatedAt: new Date(),
              },
              select: {
                id: true,
                title: true,
                partnerName: true,
              },
            })
            updatedProjects = 1
            stats.updatedProjects += 1
            console.log(`[${runnerName}] Updated existing project: ${projectTitle}`)
          }
        }

        stats.processedProjects += 1

        const taskStats = await syncProjectTasks(project.id, items, userMap)
        stats.createdTasks += taskStats.createdTasks
        stats.updatedTasks += taskStats.updatedTasks
        stats.updatedTaskFields += taskStats.updatedTaskFields

        if (taskStats.skippedBecauseAccepted) {
          stats.skippedTaskSyncProjects += 1
        }

        const hasProjectChanges =
          createdProjects > 0 ||
          updatedProjects > 0 ||
          taskStats.createdTasks > 0 ||
          taskStats.updatedTasks > 0 ||
          taskStats.updatedTaskFields > 0

        if (hasProjectChanges) {
          projectItems.push({
            projectId: project.id,
            pocketProjectId,
            projectTitle,
            success: true,
            skipped: false,
            skippedReason: null,
            createdProjects,
            updatedProjects,
            createdTasks: taskStats.createdTasks,
              updatedTasks: taskStats.updatedTasks,
              updatedTaskFields: taskStats.updatedTaskFields,
              skippedTaskSync: taskStats.skippedBecauseAccepted,
              errorMessage: null,
              changeDetails: {
                project:
                  projectChanges.length > 0
                    ? {
                        action: createdProjects > 0 ? "created" : "updated",
                        changes: projectChanges,
                      }
                    : null,
                tasks: taskStats.changeDetails.tasks,
                taskFields: taskStats.changeDetails.taskFields,
              },
            })
          }

        if (selectedProjects.length === 1) {
          stats.projectId = project.id
        } else {
          stats.projectId = null
        }
      } catch (projectError) {
        const projectErrorMessage =
          projectError instanceof Error ? projectError.message : String(projectError)

        projectItems.push({
          projectId: null,
          pocketProjectId,
          projectTitle,
          success: false,
          skipped: false,
          skippedReason: null,
          createdProjects: 0,
          updatedProjects: 0,
          createdTasks: 0,
          updatedTasks: 0,
          updatedTaskFields: 0,
          skippedTaskSync: false,
          errorMessage: projectErrorMessage,
          changeDetails: null,
        })

        throw projectError
      }
    }

    console.log(
      `[${runnerName}] Summary: feldolgozott project=${stats.processedProjects}, uj SZF=${stats.createdProjects}, frissitett SZF=${stats.updatedProjects}, uj task=${stats.createdTasks}, frissitett task=${stats.updatedTasks}, frissitett taskField=${stats.updatedTaskFields}, skipped project=${stats.skippedProjects}, skipped task sync=${stats.skippedTaskSyncProjects}`
    )

    console.log(`[${runnerName}] Task sync finished successfully.`)
    isSuccess = true
    return stats
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : String(error)
    console.error(`[${runnerName}] Sync error:`, error)
    process.exitCode = 1
    throw error
  } finally {
    const finishedAt = new Date()

    try {
      const syncLogId = randomUUID()

      await prisma.$executeRaw`
        INSERT INTO "ProjectSyncLog" (
          "id",
          "startedAt",
          "finishedAt",
          "success",
          "runnerName",
          "scheduleType",
          "selectedProjectTitle",
          "projectId",
          "processedProjects",
          "createdProjects",
          "updatedProjects",
          "createdTasks",
          "updatedTasks",
          "updatedTaskFields",
          "skippedProjects",
          "skippedTaskSyncProjects",
          "errorMessage"
        ) VALUES (
          ${syncLogId},
          ${startedAt},
          ${finishedAt},
          ${isSuccess},
          ${runnerName},
          ${scheduleType},
          ${stats.selectedProjectTitle},
          ${stats.projectId},
          ${stats.processedProjects},
          ${stats.createdProjects},
          ${stats.updatedProjects},
          ${stats.createdTasks},
          ${stats.updatedTasks},
          ${stats.updatedTaskFields},
          ${stats.skippedProjects},
          ${stats.skippedTaskSyncProjects},
          ${errorMessage}
        )
      `

      for (const item of projectItems) {
        const itemId = randomUUID()

        await prisma.$executeRaw`
          INSERT INTO "ProjectSyncLogItem" (
            "id",
            "syncLogId",
            "projectId",
            "pocketProjectId",
            "projectTitle",
            "success",
            "skipped",
            "skippedReason",
            "createdProjects",
            "updatedProjects",
            "createdTasks",
            "updatedTasks",
            "updatedTaskFields",
            "skippedTaskSync",
            "errorMessage",
            "changeDetails"
          ) VALUES (
            ${itemId},
            ${syncLogId},
            ${item.projectId},
            ${item.pocketProjectId},
            ${item.projectTitle},
            ${item.success},
            ${item.skipped},
            ${item.skippedReason},
            ${item.createdProjects},
            ${item.updatedProjects},
            ${item.createdTasks},
            ${item.updatedTasks},
            ${item.updatedTaskFields},
            ${item.skippedTaskSync},
            ${item.errorMessage},
            ${item.changeDetails ? JSON.stringify(item.changeDetails) : null}::jsonb
          )
        `
      }

      console.log(
        `[${runnerName}] Sync log saved to database. scheduleType=${scheduleType}, success=${isSuccess}, items=${projectItems.length}`
      )
    } catch (logError) {
      console.error(`[${runnerName}] Failed to save sync log to database:`, logError)
    }

    await prisma.$disconnect()
  }
}
