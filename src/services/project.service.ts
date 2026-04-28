import { Prisma, PrismaClient } from "@prisma/client"
import {
  sendCommentCreatedNotification,
  sendTaskEventCreatedNotification,
  sendTaskStatusChangedNotification,
} from "./notification.service"
import { HttpError } from "../middlewares/error.middleware"

const prisma = new PrismaClient()
const PLOMBA_FIELD_NAME = "plomba"

type AttachmentInput = {
  url: string
  type: "photo" | "file"
}

type InspectionInput = {
  id?: string
  key: string
  checked: boolean
  note?: string | null
  data?: string | null
}

type PortaChecklistInput = {
  id?: string
  isUserChecked?: boolean | null
  isTruckChecked?: boolean | null
  isTrailerChecked?: boolean | null
  isTraktorChecked?: boolean | null
  isBioChecked?: boolean | null
  isSzondaChecked?: boolean | null
  isStarted?: boolean | null
  startedAt?: Date | null
}

type LibraInput = {
  id?: string
  szfCode?: string | null
  plateNumber?: string | null
  assignedUserId?: string | null
  amount?: number | null
  manuallyLibra?: string | null
  manuallyLibraComment?: string | null
  taskFieldId?: string | null
}

type TaskFieldInput = {
  id?: string
  pocketId?: string | null
  name: string
  data?: string | null
  type?: string | null
}

type TaskEventFieldInput = {
  id?: string
  name: string
  data?: string | null
  type?: string | null
  attachments?: AttachmentInput[]
}

type TaskEventInput = {
  id?: string
  name?: string | null
  status?: "doing" | "completed"
  createdAt?: Date | null
  fields?: TaskEventFieldInput[]
}

type PaginationInput = {
  offset: number
  limit: number
}

export type ProjectSearchFilters = {
  projectTitleContains?: string
  szfCode?: string
  portaNumber?: 1 | 2,
  orderBy?: "ASC" | "DESC"
  assignedUserId?: string
  task?: {
    deadlineAfter?: Date
    assignedUserId?: string
    submittedUserId?: string
    status?: string
    pickupAddressContains?: string
    deliveryAddressContains?: string
    vontatoDataContains?: string
    potkocsiDataContains?: string
    taskFilter?: "open" | "previous"
  }
}

const KORNYE_ADDRESS = "Környe Tópart 1."

type ProjectWhereInput = NonNullable<
  NonNullable<Parameters<typeof prisma.project.findMany>[0]>["where"]
>
type TaskWhereInput = NonNullable<
  NonNullable<ProjectWhereInput["tasks"]>["some"]
>
type TaskIncludeWhereInput = NonNullable<
  NonNullable<Parameters<typeof prisma.task.findMany>[0]>["where"]
>

function addDays(date: Date, days: number) {
  const nextDate = new Date(date)
  nextDate.setDate(nextDate.getDate() + days)
  return nextDate
}

function startOfDay(date: Date) {
  const nextDate = new Date(date)
  nextDate.setHours(0, 0, 0, 0)
  return nextDate
}

function endOfDay(date: Date) {
  const nextDate = new Date(date)
  nextDate.setHours(23, 59, 59, 999)
  return nextDate
}

async function sendCompletedAkasztasNotification(taskEventId: string) {
  const taskEvent = await prisma.taskEvent.findUnique({
    where: { id: taskEventId },
    select: {
      id: true,
      name: true,
      status: true,
      fields: {
        select: {
          name: true,
          data: true,
        },
      },
      task: {
        select: {
          id: true,
          projectId: true,
          submittedUserId: true,
          project: {
            select: {
              title: true,
            },
          },
        },
      },
    },
  })

  if (
    !taskEvent ||
    taskEvent.name !== "Akasztás" ||
    taskEvent.status !== "completed"
  ) {
    return
  }

  try {
    await sendTaskEventCreatedNotification({
      projectId: taskEvent.task.projectId,
      taskId: taskEvent.task.id,
      projectTitle: taskEvent.task.project.title,
      submittedUserId: taskEvent.task.submittedUserId,
      eventName: taskEvent.name,
      fields: taskEvent.fields.map((field) => ({
        name: field.name,
        data: field.data,
      })),
    })
  } catch (error) {
    console.error("Failed to send task event created notification push", error)
  }
}

function buildProjectInclude(taskWhere?: TaskIncludeWhereInput) {
  return {
    tasks: {
      ...(taskWhere ? { where: taskWhere } : {}),
      include: {
        comments: {
          include: {
            taggedUsers: true,
            attachments: true,
          },
        },
        fields: {
          include: {
            attachments: true,
          },
        },
        inspections: true,
        portaChecklist: true,
        libra: {
          include: {
            taskField: {
              include: {
                attachments: true,
              },
            },
          },
        },
        events: {
          include: {
            fields: {
              include: {
                attachments: true,
              },
            },
          },
        },
      },
    },
  }
}

function withTaggedUserIdsInProject(project: any) {
  return {
    ...project,
    tasks: project.tasks.map((task: any) => ({
      ...task,
      comments: task.comments.map((comment: any) => {
        const { taggedUsers, ...commentWithoutTaggedUsers } = comment

        return {
          ...commentWithoutTaggedUsers,
          taggedUserIds: taggedUsers.map((taggedUser: any) => taggedUser.userId),
        }
      }),
    })),
  }
}

function withTaggedUserIdsInTask(task: any) {
  return {
    ...task,
    comments: task.comments.map((comment: any) => {
      const { taggedUsers, ...commentWithoutTaggedUsers } = comment

      return {
        ...commentWithoutTaggedUsers,
        taggedUserIds: taggedUsers.map((taggedUser: any) => taggedUser.userId),
      }
    }),
  }
}

function createPaginationMeta(offset: number, limit: number, totalCount: number, returnedCount: number) {
  const hasNextPage = offset + returnedCount < totalCount
  const hasPreviousPage = offset > 0

  return {
    totalCount,
    offset,
    limit,
    returnedCount,
    currentRange:
      returnedCount === 0
        ? null
        : {
            start: offset,
            end: offset + returnedCount - 1,
          },
    hasNextPage,
    hasPreviousPage,
    nextOffset: hasNextPage ? offset + limit : null,
    previousOffset: hasPreviousPage ? Math.max(0, offset - limit) : null,
  }
}

function getProjectDeadlineSortValue(project: any) {
  const deadlines = project.tasks
    .filter((task: any) => task.isPickUp === true && task.deadline instanceof Date)
    .map((task: any) => task.deadline)
    .filter((deadline: Date | null): deadline is Date => deadline instanceof Date)
    .map((deadline: Date) => deadline.getTime())

  if (deadlines.length === 0) {
    return null
  }

  return Math.min(...deadlines)
}

function getPortaWindow(referenceDate = new Date()) {
  return {
    gte: startOfDay(addDays(referenceDate, -2)),
    lte: endOfDay(addDays(referenceDate, 7)),
  }
}

function isTaskMatchingPortaAnchor(task: any, referenceDate = new Date()) {
  if (typeof task.fullAddress !== "string" || !task.fullAddress.toLowerCase().includes("környe")) {
    return false
  }

  if (!(task.deadline instanceof Date)) {
    return false
  }

  const portaWindow = getPortaWindow(referenceDate)
  return task.deadline >= portaWindow.gte && task.deadline <= portaWindow.lte
}

function getPortaRelatedTasks(project: any, portaNumber: 1 | 2, referenceDate = new Date()) {
  const includedTaskIds = new Set<string>()

  for (const task of project.tasks) {
    if (!isTaskMatchingPortaAnchor(task, referenceDate)) {
      continue
    }

    console.log('anchorok')

    includedTaskIds.add(task.id)

    const taskGroupId = Number(task.groupId)
    if (!Number.isFinite(taskGroupId)) {
      continue
    }

    const pairedGroupId = portaNumber === 2 ? taskGroupId - 1 : taskGroupId + 1
    console.log('pairedGroupId',pairedGroupId, portaNumber, taskGroupId)
    const pairedTask = project.tasks.find(
      (candidate: any) => Number(candidate.groupId) === pairedGroupId
    )

    if (pairedTask) {
      includedTaskIds.add(pairedTask.id)
    }
  }

  return project.tasks.filter((task: any) => includedTaskIds.has(task.id))
}

async function findProjects(
  where: ProjectWhereInput | undefined,
  pagination: PaginationInput,
  taskIncludeWhere?: TaskIncludeWhereInput,
  deadlineOrder?: "ASC" | "DESC",
  portaNumber?: 1 | 2
) {
  const [totalCount, projects] = await prisma.$transaction(
    deadlineOrder
      ? [
          prisma.project.count({ where }),
          prisma.project.findMany({
            where,
            orderBy: {
              id: "asc",
            },
            include: buildProjectInclude(taskIncludeWhere),
          }),
        ]
      : [
          prisma.project.count({ where }),
          prisma.project.findMany({
            where,
            skip: pagination.offset,
            take: pagination.limit,
            orderBy: {
              id: "asc",
            },
            include: buildProjectInclude(taskIncludeWhere),
          }),
        ]
  )

  const normalizedProjects = projects.map((project) => {
    const normalizedProject = withTaggedUserIdsInProject(project)

    if (portaNumber === 1 || portaNumber === 2) {
      console.log('szf', project.title)
      return {
        ...normalizedProject,
        tasks: getPortaRelatedTasks(normalizedProject, portaNumber),
      }
    }

    return normalizedProject
  })

  if (deadlineOrder) {
    normalizedProjects.sort((left, right) => {
      const leftDeadline = getProjectDeadlineSortValue(left)
      const rightDeadline = getProjectDeadlineSortValue(right)

      if (leftDeadline === null && rightDeadline === null) {
        return 0
      }

      if (leftDeadline === null) {
        return 1
      }

      if (rightDeadline === null) {
        return -1
      }

      return deadlineOrder === "ASC"
        ? leftDeadline - rightDeadline
        : rightDeadline - leftDeadline
    })
  }

  const paginatedProjects = deadlineOrder
    ? normalizedProjects.slice(pagination.offset, pagination.offset + pagination.limit)
    : normalizedProjects

  return {
    data: paginatedProjects,
    pagination: createPaginationMeta(
      pagination.offset,
      pagination.limit,
      totalCount,
      paginatedProjects.length
    ),
  }
}

export async function getProjects(pagination: PaginationInput) {
  return findProjects(undefined, pagination)
}

export async function getProjectById(id: string) {
  const project = await prisma.project.findUnique({
    where: { id },
    include: buildProjectInclude(),
  })

  if (!project) {
    return null
  }

  return withTaggedUserIdsInProject(project)
}

export async function searchProjects(
  filters: ProjectSearchFilters,
  pagination: PaginationInput
) {
  const deadlineOrder = filters.orderBy ?? "DESC"
  const projectAndConditions: ProjectWhereInput[] = []
  let taskIncludeWhere: TaskIncludeWhereInput | undefined
  const shouldReturnWholeProjectPackage =
    typeof filters.task?.pickupAddressContains === "string" ||
    typeof filters.task?.deliveryAddressContains === "string"

  if (filters.projectTitleContains) {
    projectAndConditions.push({
      title: {
        contains: filters.projectTitleContains,
        mode: "insensitive",
      },
    })
  }

  if (filters.szfCode) {
    projectAndConditions.push({
      title: {
        contains: filters.szfCode,
        mode: "insensitive",
      },
    })
  }

  if (filters.assignedUserId) {
    projectAndConditions.push({
      tasks: {
        some: {
          OR: [
            { assignedUserId: filters.assignedUserId },
            { assignedUserId2: filters.assignedUserId },
          ],
        },
      },
    })
  }

  const taskWhere: TaskWhereInput = {}
  const taskAndConditions: TaskWhereInput[] = []

  if (filters.portaNumber === 1 || filters.portaNumber === 2) {
    const portaWindow = getPortaWindow()
    taskWhere.isPickUp = filters.portaNumber === 1 ? true : false
    taskWhere.fullAddress = {
      contains: KORNYE_ADDRESS,
      mode: "insensitive",
    }
    taskWhere.deadline = {
      gte: portaWindow.gte,
      lte: portaWindow.lte,
    }
  } else if (filters.task?.deadlineAfter) {
    taskWhere.deadline = {
      gt: filters.task.deadlineAfter,
    }
  }

  if (filters.task?.assignedUserId) {
    taskWhere.OR = [
      { assignedUserId: filters.task.assignedUserId },
      { assignedUserId2: filters.task.assignedUserId },
    ]
  }

  if (filters.task?.submittedUserId) {
    taskWhere.submittedUserId = filters.task.submittedUserId
  }

  if (filters.task?.status) {
    taskWhere.status = filters.task.status
  }

  if (filters.task?.pickupAddressContains) {
    taskAndConditions.push({
      isPickUp: true,
      fullAddress: {
        contains: filters.task.pickupAddressContains,
        mode: "insensitive",
      },
    })
  }

  if (filters.task?.deliveryAddressContains) {
    taskAndConditions.push({
      isPickUp: false,
      fullAddress: {
        contains: filters.task.deliveryAddressContains,
        mode: "insensitive",
      },
    })
  }

  if (filters.task?.vontatoDataContains) {
    taskAndConditions.push({
      fields: {
        some: {
          name: "truck",
          data: {
            contains: filters.task.vontatoDataContains,
            mode: "insensitive",
          },
        },
      },
    })
  }

  if (filters.task?.potkocsiDataContains) {
    taskAndConditions.push({
      fields: {
        some: {
          name: "trailer",
          data: {
            contains: filters.task.potkocsiDataContains,
            mode: "insensitive",
          },
        },
      },
    })
  }

  if (filters.task?.taskFilter === "open") {
    projectAndConditions.push({
      NOT: {
        tasks: {
          some: {
            isPickUp: false,
          },
          every: {
            OR: [
              {
                isPickUp: true,
              },
              {
                isPickUp: false,
                status: "completed",
              },
            ],
          },
        },
      },
    })
  }

  if (taskAndConditions.length > 0) {
    taskWhere.AND = taskAndConditions
  }

  if (Object.keys(taskWhere).length > 0) {
    projectAndConditions.push({
      tasks: { some: taskWhere },
    })
    if (
      filters.portaNumber !== 1 &&
      filters.portaNumber !== 2 &&
      !shouldReturnWholeProjectPackage
    ) {
      taskIncludeWhere = taskWhere
    }
  }

  if (filters.task?.taskFilter === "previous") {
    projectAndConditions.push({
      tasks: {
        some: {
          isPickUp: false,
        },
        every: {
          OR: [
            {
              isPickUp: true,
            },
            {
              isPickUp: false,
              status: "completed",
            },
          ],
        },
      },
    })
  }

  const where =
    projectAndConditions.length > 0
      ? projectAndConditions.length === 1
        ? projectAndConditions[0]
        : { AND: projectAndConditions }
      : undefined

  console.log('taskIncludeWhere',taskIncludeWhere)
  return findProjects(where, pagination, taskIncludeWhere, deadlineOrder, filters.portaNumber)
}

function removeNilProperties<T extends Record<string, unknown>>(input: T): Partial<T> {
  const result: Partial<T> = {}

  for (const [key, value] of Object.entries(input)) {
    if (value !== null && value !== undefined) {
      result[key as keyof T] = value as T[keyof T]
    }
  }

  return result
}

function removeUndefinedProperties<T extends Record<string, unknown>>(input: T): Partial<T> {
  const result: Partial<T> = {}

  for (const [key, value] of Object.entries(input)) {
    if (value !== undefined) {
      result[key as keyof T] = value as T[keyof T]
    }
  }

  return result
}

export async function patchTaskById(
  id: string,
  patchData: Prisma.TaskUncheckedUpdateInput
) {
  const sanitizedPatchData = removeNilProperties(
    patchData as Record<string, unknown>
  ) as Prisma.TaskUncheckedUpdateInput

  if (Object.keys(sanitizedPatchData).length === 0) {
    return null
  }

  const requestedStatus =
    typeof sanitizedPatchData.status === "string"
      ? sanitizedPatchData.status
      : undefined

  try {
    const previousTask =
      requestedStatus !== undefined
        ? await prisma.task.findUnique({
            where: { id },
            select: {
              status: true,
              submittedUserId: true,
            },
          })
        : null

    if (requestedStatus !== undefined && !previousTask) {
      return undefined
    }

    const updatedTask = await prisma.task.update({
      where: { id },
      data: sanitizedPatchData,
      include: {
        comments: {
          include: {
            taggedUsers: true,
            attachments: true,
          },
        },
        fields: {
          include: {
            attachments: true,
          },
        },
        inspections: true,
        portaChecklist: true,
        libra: {
          include: {
            taskField: {
              include: {
                attachments: true,
              },
            },
          },
        },
        events: {
          include: {
            fields: {
              include: {
                attachments: true,
              },
            },
          },
        },
      },
    })

    if (requestedStatus !== undefined) {
      const previousStatus = (previousTask?.status ?? "").toLowerCase()
      const newStatus = (updatedTask.status ?? "").toLowerCase()

      if (previousStatus !== newStatus) {
        try {
          await sendTaskStatusChangedNotification({
            taskId: updatedTask.projectId,
            subTaskId: updatedTask.id,
            submittedUserId: updatedTask.submittedUserId ?? previousTask?.submittedUserId,
            status: newStatus
          })
        } catch (error) {
          console.error("Failed to send task status notification push", error)
        }
      }
    }

    return withTaggedUserIdsInTask(updatedTask)
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return undefined
    }

    throw error
  }
}

export async function patchTaskEventById(
  id: string,
  patchData: Prisma.TaskEventUncheckedUpdateInput
) {
  const sanitizedPatchData = removeUndefinedProperties(
    patchData as Record<string, unknown>
  ) as Prisma.TaskEventUncheckedUpdateInput

  if (Object.keys(sanitizedPatchData).length === 0) {
    return null
  }

  try {
    const existingTaskEvent = await prisma.taskEvent.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        status: true,
      },
    })

    if (!existingTaskEvent) {
      return undefined
    }

    const updatedTaskEvent = await prisma.taskEvent.update({
      where: { id },
      data: sanitizedPatchData,
      include: {
        fields: {
          include: {
            attachments: true,
          },
        },
      },
    })

    if (
      existingTaskEvent.name === "Akasztás" &&
      existingTaskEvent.status !== "completed" &&
      updatedTaskEvent.status === "completed"
    ) {
      await sendCompletedAkasztasNotification(updatedTaskEvent.id)
    }

    return updatedTaskEvent
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return undefined
    }

    throw error
  }
}

export async function patchTaskFieldById(
  id: string,
  patchData: Prisma.TaskFieldUncheckedUpdateInput & { attachments?: AttachmentInput[] }
) {
  const { attachments, ...fieldPatchData } = patchData
  const sanitizedPatchData = removeUndefinedProperties(
    fieldPatchData as Record<string, unknown>
  ) as Prisma.TaskFieldUncheckedUpdateInput

  if (Object.keys(sanitizedPatchData).length === 0 && attachments === undefined) {
    return null
  }

  try {
    return await prisma.$transaction(async (tx) => {
      const existingField = await tx.taskField.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          data: true,
          task: {
            select: {
              projectId: true,
              isPickUp: true,
            },
          },
        },
      })

      if (!existingField) {
        return undefined
      }

      const hasDataPatch = Object.prototype.hasOwnProperty.call(sanitizedPatchData, "data")
      const hasNamePatch = Object.prototype.hasOwnProperty.call(sanitizedPatchData, "name")
      const nextFieldName =
        typeof sanitizedPatchData.name === "string"
          ? sanitizedPatchData.name
          : existingField.name
      const nextFieldData =
        hasDataPatch &&
        (typeof sanitizedPatchData.data === "string" || sanitizedPatchData.data === null)
          ? sanitizedPatchData.data
          : existingField.data

      if (
        (hasDataPatch || hasNamePatch) &&
        nextFieldName === PLOMBA_FIELD_NAME &&
        typeof nextFieldData === "string" &&
        nextFieldData.length > 0
      ) {
        let skipDuplicateCheck = false

        if (existingField.task.isPickUp === false) {
          const pickupPlomba = await tx.taskField.findFirst({
            where: {
              name: PLOMBA_FIELD_NAME,
              task: {
                projectId: existingField.task.projectId,
                isPickUp: true,
              },
              AND: [{ data: { not: null } }, { data: { not: "" } }],
            },
            select: { id: true },
          })

          skipDuplicateCheck = pickupPlomba !== null
        }

        if (!skipDuplicateCheck) {
          const duplicatePlomba = await tx.taskField.findFirst({
            where: {
              id: { not: existingField.id },
              name: PLOMBA_FIELD_NAME,
              data: nextFieldData,
            },
            select: { id: true },
          })

          if (duplicatePlomba) {
            throw new HttpError(409, "Ez a plombaszám már használatban van")
          }
        }
      }

      if (attachments !== undefined) {
        if (Object.keys(sanitizedPatchData).length > 0) {
          await tx.taskField.update({
            where: { id },
            data: sanitizedPatchData,
          })
        }

        await tx.attachment.deleteMany({
          where: { taskFieldId: id },
        })

        if (attachments.length > 0) {
          await tx.attachment.createMany({
            data: attachments.map((attachment) => ({
              taskFieldId: id,
              url: attachment.url,
              type: attachment.type,
            })),
          })
        }

        return tx.taskField.findUnique({
          where: { id },
          include: {
            attachments: true,
          },
        })
      }

      return tx.taskField.update({
        where: { id },
        data: sanitizedPatchData,
        include: {
          attachments: true,
        },
      })
    })
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return undefined
    }

    throw error
  }
}

export async function createTaskFieldByTaskId(taskId: string, input: TaskFieldInput) {
  const task = await prisma.task.findUnique({
    where: { id: taskId },
    select: { id: true },
  })

  if (!task) {
    return undefined
  }

  return prisma.taskField.create({
    data: {
      id: input.id,
      taskId: task.id,
      pocketId: input.pocketId ?? null,
      name: input.name,
      data: input.data ?? null,
      type: input.type ?? null,
    },
    include: {
      attachments: true,
    },
  })
}

export async function patchTaskEventFieldById(
  id: string,
  patchData: Prisma.TaskEventFieldUncheckedUpdateInput & { attachments?: AttachmentInput[] }
) {
  const { attachments, ...fieldPatchData } = patchData
  const sanitizedPatchData = removeUndefinedProperties(
    fieldPatchData as Record<string, unknown>
  ) as Prisma.TaskEventFieldUncheckedUpdateInput

  if (Object.keys(sanitizedPatchData).length === 0 && attachments === undefined) {
    return null
  }

  try {
    return await prisma.$transaction(async (tx) => {
      if (attachments !== undefined) {
        const existingField = await tx.taskEventField.findUnique({
          where: { id },
          select: { id: true },
        })

        if (!existingField) {
          return undefined
        }

        if (Object.keys(sanitizedPatchData).length > 0) {
          await tx.taskEventField.update({
            where: { id },
            data: sanitizedPatchData,
          })
        }

        await tx.attachment.deleteMany({
          where: { taskEventFieldId: id },
        })

        if (attachments.length > 0) {
          await tx.attachment.createMany({
            data: attachments.map((attachment) => ({
              taskEventFieldId: id,
              url: attachment.url,
              type: attachment.type,
            })),
          })
        }

        return tx.taskEventField.findUnique({
          where: { id },
          include: {
            attachments: true,
          },
        })
      }

      return tx.taskEventField.update({
        where: { id },
        data: sanitizedPatchData,
        include: {
          attachments: true,
        },
      })
    })
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return undefined
    }

    throw error
  }
}

export async function createTaskEventFieldByTaskEventId(
  taskEventId: string,
  input: TaskEventFieldInput
) {
  const taskEvent = await prisma.taskEvent.findUnique({
    where: { id: taskEventId },
    select: { id: true },
  })

  if (!taskEvent) {
    return undefined
  }

  return prisma.taskEventField.create({
    data: {
      id: input.id,
      taskEventId: taskEvent.id,
      name: input.name,
      data: input.data ?? null,
      type: input.type ?? null,
      attachments:
        input.attachments && input.attachments.length > 0
          ? {
              create: input.attachments.map((attachment) => ({
                url: attachment.url,
                type: attachment.type,
              })),
            }
          : undefined,
    },
    include: {
      attachments: true,
    },
  })
}

export async function deleteAttachmentById(id: string) {
  try {
    return await prisma.attachment.delete({
      where: { id },
    })
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return undefined
    }

    throw error
  }
}

export async function createInspectionsByTaskId(taskId: string, input: InspectionInput[]) {
  const task = await prisma.task.findUnique({
    where: { id: taskId },
    select: { id: true },
  })

  if (!task) {
    return undefined
  }

  if (input.length === 0) {
    return []
  }

  return prisma.$transaction(
    input.map((inspection) =>
      prisma.inspection.create({
        data: {
          id: inspection.id,
          taskId: task.id,
          key: inspection.key,
          checked: inspection.checked,
          note: inspection.note ?? null,
          data: inspection.data ?? null,
        },
      })
    )
  )
}

export async function patchInspectionById(
  id: string,
  patchData: Prisma.InspectionUncheckedUpdateInput
) {
  const sanitizedPatchData = Object.fromEntries(
    Object.entries(patchData as Record<string, unknown>).filter(
      ([, value]) => value !== undefined
    )
  ) as Prisma.InspectionUncheckedUpdateInput

  if (Object.keys(sanitizedPatchData).length === 0) {
    return null
  }

  try {
    return await prisma.inspection.update({
      where: { id },
      data: sanitizedPatchData,
    })
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return undefined
    }

    throw error
  }
}

export async function createPortaChecklistByTaskId(
  taskId: string,
  input: PortaChecklistInput
) {
  const task = await prisma.task.findUnique({
    where: { id: taskId },
    select: {
      id: true,
      portaChecklist: {
        select: {
          id: true,
        },
      },
    },
  })

  if (!task) {
    return undefined
  }

  if (task.portaChecklist) {
    return null
  }

  return prisma.portaChecklist.create({
    data: {
      id: input.id,
      taskId: task.id,
      isUserChecked: input.isUserChecked ?? null,
      isTruckChecked: input.isTruckChecked ?? null,
      isTrailerChecked: input.isTrailerChecked ?? null,
      isTraktorChecked: input.isTraktorChecked ?? null,
      isBioChecked: input.isBioChecked ?? null,
      isSzondaChecked: input.isSzondaChecked ?? null,
      isStarted: input.isStarted ?? null,
      startedAt: input.startedAt ?? null,
    },
  })
}

export async function patchPortaChecklistById(
  id: string,
  patchData: Prisma.PortaChecklistUncheckedUpdateInput
) {
  const sanitizedPatchData = Object.fromEntries(
    Object.entries(patchData as Record<string, unknown>).filter(
      ([, value]) => value !== undefined
    )
  ) as Prisma.PortaChecklistUncheckedUpdateInput

  if (Object.keys(sanitizedPatchData).length === 0) {
    return null
  }

  try {
    return await prisma.portaChecklist.update({
      where: { id },
      data: sanitizedPatchData,
    })
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return undefined
    }

    throw error
  }
}

export async function createLibraByTaskId(taskId: string, input: LibraInput) {
  const task = await prisma.task.findUnique({
    where: { id: taskId },
    select: {
      id: true,
      projectId: true,
      libra: {
        select: {
          id: true,
        },
      },
    },
  })

  if (!task) {
    return undefined
  }

  if (task.libra) {
    return null
  }

  if (input.taskFieldId) {
    const taskField = await prisma.taskField.findUnique({
      where: { id: input.taskFieldId },
      select: {
        id: true,
        taskId: true,
      },
    })

    if (!taskField || taskField.taskId !== task.id) {
      return false
    }
  }

  return prisma.libra.create({
    data: {
      id: input.id,
      projectId: task.projectId,
      taskId: task.id,
      szfCode: input.szfCode ?? null,
      plateNumber: input.plateNumber ?? null,
      assignedUserId: input.assignedUserId ?? null,
      amount: input.amount ?? null,
      manuallyLibra: input.manuallyLibra ?? null,
      manuallyLibraComment: input.manuallyLibraComment ?? null,
      taskFieldId: input.taskFieldId ?? null,
    },
    include: {
      taskField: {
        include: {
          attachments: true,
        },
      },
    },
  })
}

export async function createTaskEventByTaskId(taskId: string, input: TaskEventInput) {
  const task = await prisma.task.findUnique({
    where: { id: taskId },
    select: {
      id: true,
      projectId: true,
      submittedUserId: true,
      project: {
        select: {
          title: true,
        },
      },
    },
  })

  if (!task) {
    return undefined
  }

  const createdTaskEvent = await prisma.taskEvent.create({
    data: {
      id: input.id,
      taskId: task.id,
      name: input.name ?? null,
      status: input.status ?? "doing",
      createdAt: input.createdAt ?? new Date(),
      fields: {
        create: (input.fields ?? []).map((field) => ({
          id: field.id,
          name: field.name,
          data: field.data ?? null,
          type: field.type ?? null,
          attachments:
            field.attachments && field.attachments.length > 0
              ? {
                  create: field.attachments.map((attachment) => ({
                    url: attachment.url,
                    type: attachment.type,
                  })),
                }
              : undefined,
        })),
      },
    },
    include: {
      fields: {
        include: {
          attachments: true,
        },
      },
    },
  })

  return createdTaskEvent
}

type CreateTaskCommentInput = {
  id?: string
  text: string
  submittedUserId?: string
  createdAt?: Date
  userIds?: string[]
  attachments?: AttachmentInput[]
}

export async function createCommentByTaskId(
  taskId: string,
  input: CreateTaskCommentInput
) {
  const task = await prisma.task.findUnique({
    where: { id: taskId },
    select: {
      id: true,
      project: {
        select: {
          id: true,
          title: true,
        },
      },
    },
  })

  if (!task) {
    return undefined
  }

  const createdComment = await prisma.comment.create({
    data: {
      id: input.id,
      taskId: task.id,
      text: input.text,
      submittedUserId: input.submittedUserId ?? null,
      createdAt: input.createdAt ?? new Date(),
      taggedUsers:
        input.userIds && input.userIds.length > 0
          ? {
              create: input.userIds.map((userId) => ({
                userId,
              })),
            }
          : undefined,
      attachments:
        input.attachments && input.attachments.length > 0
          ? {
              create: input.attachments.map((attachment) => ({
                url: attachment.url,
                type: attachment.type,
              })),
            }
          : undefined,
    },
    include: {
      taggedUsers: true,
      attachments: true,
    },
  })

  try {
    const taggedUserIds = createdComment.taggedUsers
      .map((taggedUser) => taggedUser.userId)
      .filter((userId) => userId !== input.submittedUserId)

    await sendCommentCreatedNotification({
      taskId: task.project.id,
      subTaskId: task.id,
      taskTitle: task.project.title,
      commentId: createdComment.id,
      taggedUserIds,
      submittedUserId: input.submittedUserId,
    })
  } catch (error) {
    console.error("Failed to send comment notification push", error)
  }

  return createdComment
}
