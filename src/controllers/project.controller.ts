import { NextFunction, Request, Response } from "express"
import { Prisma } from "@prisma/client"

import { HttpError } from "../middlewares/error.middleware"
import {
  createCommentByTaskId,
  createInspectionsByTaskId,
  createLibraByTaskId,
  createTaskEventByTaskId,
  createTaskFieldByTaskId,
  createPortaChecklistByTaskId,
  deleteAttachmentById,
  getProjectById,
  getProjects,
  patchPortaChecklistById,
  patchTaskById,
  patchTaskFieldById,
  patchInspectionById,
  ProjectSearchFilters,
  searchProjects,
} from "../services/project.service"

const DEFAULT_LIMIT = 20
const MAX_LIMIT = 100

type AttachmentInput = {
  url: string
  type: "photo" | "file"
}

type TaskFieldPatchInput = Prisma.TaskFieldUncheckedUpdateInput & {
  attachments?: AttachmentInput[]
}

type InspectionPatchInput = Prisma.InspectionUncheckedUpdateInput
type PortaChecklistPatchInput = Prisma.PortaChecklistUncheckedUpdateInput

type InspectionCreateInput = {
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

type TaskFieldCreateInput = {
  id?: string
  pocketId?: string | null
  name: string
  data?: string | null
  type?: string | null
}

type TaskEventFieldCreateInput = {
  id?: string
  name: string
  data?: string | null
  type?: string | null
  attachments?: AttachmentInput[]
}

type TaskEventCreateInput = {
  id?: string
  name?: string | null
  createdAt?: Date | null
  fields: TaskEventFieldCreateInput[]
}

function parseIntQueryParam(
  value: unknown,
  key: "offset" | "limit",
  defaultValue: number,
  min: number,
  max?: number
) {
  if (value === undefined) {
    return defaultValue
  }

  if (typeof value !== "string") {
    throw new HttpError(400, `Invalid '${key}' query param`)
  }

  const parsedValue = Number(value)

  if (!Number.isInteger(parsedValue) || parsedValue < min) {
    throw new HttpError(400, `Invalid '${key}' query param`)
  }

  if (max !== undefined && parsedValue > max) {
    throw new HttpError(400, `'${key}' cannot be greater than ${max}`)
  }

  return parsedValue
}

function parseCreateCommentBody(rawBody: unknown) {
  if (rawBody === null || typeof rawBody !== "object" || Array.isArray(rawBody)) {
    throw new HttpError(400, "Request body must be a JSON object")
  }

  const body = rawBody as Record<string, unknown>
  const allowedFields = new Set(["id", "text", "submittedUserId", "createdAt", "userIds", "attachments"])

  for (const key of Object.keys(body)) {
    if (!allowedFields.has(key)) {
      throw new HttpError(400, `Unknown create comment field: '${key}'`)
    }
  }

  if (!isNonEmptyString(body.text)) {
    throw new HttpError(400, "'text' must be a non-empty string")
  }

  let id: string | undefined
  if (body.id !== undefined) {
    if (!isNonEmptyString(body.id)) {
      throw new HttpError(400, "'id' must be a non-empty string")
    }
    id = body.id
  }

  let submittedUserId: string | undefined
  if (body.submittedUserId !== undefined) {
    if (!isNonEmptyString(body.submittedUserId)) {
      throw new HttpError(400, "'submittedUserId' must be a non-empty string")
    }
    submittedUserId = body.submittedUserId
  }

  let createdAt: Date | undefined
  if (body.createdAt !== undefined) {
    if (!isNonEmptyString(body.createdAt)) {
      throw new HttpError(400, "'createdAt' must be a date string")
    }

    const parsedDate = new Date(body.createdAt)
    if (Number.isNaN(parsedDate.getTime())) {
      throw new HttpError(400, "Invalid 'createdAt' date format")
    }
    createdAt = parsedDate
  }

  let userIds: string[] | undefined
  if (body.userIds !== undefined) {
    if (!Array.isArray(body.userIds)) {
      throw new HttpError(400, "'userIds' must be an array of non-empty strings")
    }

    const parsedUserIds = body.userIds.map((userId) => {
      if (!isNonEmptyString(userId)) {
        throw new HttpError(400, "'userIds' must be an array of non-empty strings")
      }
      return userId
    })

    userIds = [...new Set(parsedUserIds)]
  }

  let attachments: AttachmentInput[] | undefined
  if (body.attachments !== undefined) {
    attachments = parseAttachments(body.attachments, "attachments")
  }

  return {
    id,
    text: body.text,
    submittedUserId,
    createdAt,
    userIds,
    attachments,
  }
}

function parseInspection(rawBody: unknown, key: string): InspectionCreateInput {
  if (rawBody === null || typeof rawBody !== "object" || Array.isArray(rawBody)) {
    throw new HttpError(400, `'${key}' must be an object`)
  }

  const body = rawBody as Record<string, unknown>
  const allowedFields = new Set(["id", "key", "checked", "note", "data"])

  for (const field of Object.keys(body)) {
    if (!allowedFields.has(field)) {
      throw new HttpError(400, `Unknown inspection field: '${key}.${field}'`)
    }
  }

  let id: string | undefined
  if (body.id !== undefined) {
    if (!isNonEmptyString(body.id)) {
      throw new HttpError(400, `'${key}.id' must be a non-empty string`)
    }
    id = body.id
  }

  if (!isNonEmptyString(body.key)) {
    throw new HttpError(400, `'${key}.key' must be a non-empty string`)
  }

  if (typeof body.checked !== "boolean") {
    throw new HttpError(400, `'${key}.checked' must be a boolean`)
  }

  let note: string | null | undefined
  if (body.note !== undefined) {
    if (body.note !== null && typeof body.note !== "string") {
      throw new HttpError(400, `'${key}.note' must be a string or null`)
    }
    note = body.note
  }

  let data: string | null | undefined
  if (body.data !== undefined) {
    if (body.data !== null && typeof body.data !== "string") {
      throw new HttpError(400, `'${key}.data' must be a string or null`)
    }
    data = body.data
  }

  return {
    id,
    key: body.key,
    checked: body.checked,
    note,
    data,
  }
}

function parseCreateInspectionsBody(rawBody: unknown) {
  if (!Array.isArray(rawBody)) {
    throw new HttpError(400, "Request body must be an array")
  }

  return rawBody.map((inspection, index) =>
    parseInspection(inspection, `body[${index}]`)
  )
}

function parseNullableBooleanField(
  body: Record<string, unknown>,
  key: string
): boolean | null | undefined {
  const value = body[key]

  if (value === undefined) {
    return undefined
  }

  if (value === null || typeof value === "boolean") {
    return value
  }

  throw new HttpError(400, `'${key}' must be a boolean or null`)
}

function parseNullableDateField(
  body: Record<string, unknown>,
  key: string
): Date | null | undefined {
  const value = body[key]

  if (value === undefined) {
    return undefined
  }

  if (value === null) {
    return null
  }

  if (typeof value !== "string") {
    throw new HttpError(400, `'${key}' must be a date string or null`)
  }

  const parsedDate = new Date(value)
  if (Number.isNaN(parsedDate.getTime())) {
    throw new HttpError(400, `Invalid '${key}' date format`)
  }

  return parsedDate
}

function parseCreatePortaChecklistBody(rawBody: unknown): PortaChecklistInput {
  if (rawBody === null || typeof rawBody !== "object" || Array.isArray(rawBody)) {
    throw new HttpError(400, "Request body must be a JSON object")
  }

  const body = rawBody as Record<string, unknown>
  const allowedFields = new Set([
    "id",
    "isUserChecked",
    "isTruckChecked",
    "isTrailerChecked",
    "isTraktorChecked",
    "isBioChecked",
    "isSzondaChecked",
    "isStarted",
    "startedAt",
  ])

  for (const field of Object.keys(body)) {
    if (!allowedFields.has(field)) {
      throw new HttpError(400, `Unknown porta checklist field: '${field}'`)
    }
  }

  let id: string | undefined
  if (body.id !== undefined) {
    if (!isNonEmptyString(body.id)) {
      throw new HttpError(400, "'id' must be a non-empty string")
    }
    id = body.id
  }

  return {
    id,
    isUserChecked: parseNullableBooleanField(body, "isUserChecked"),
    isTruckChecked: parseNullableBooleanField(body, "isTruckChecked"),
    isTrailerChecked: parseNullableBooleanField(body, "isTrailerChecked"),
    isTraktorChecked: parseNullableBooleanField(body, "isTraktorChecked"),
    isBioChecked: parseNullableBooleanField(body, "isBioChecked"),
    isSzondaChecked: parseNullableBooleanField(body, "isSzondaChecked"),
    isStarted: parseNullableBooleanField(body, "isStarted"),
    startedAt: parseNullableDateField(body, "startedAt"),
  }
}

function parseNullableStringField(
  body: Record<string, unknown>,
  key: string
): string | null | undefined {
  const value = body[key]

  if (value === undefined) {
    return undefined
  }

  if (value === null || typeof value === "string") {
    return value
  }

  throw new HttpError(400, `'${key}' must be a string or null`)
}

function parseNullableNumberField(
  body: Record<string, unknown>,
  key: string
): number | null | undefined {
  const value = body[key]

  if (value === undefined) {
    return undefined
  }

  if (value === null) {
    return null
  }

  if (typeof value !== "number" || Number.isNaN(value) || !Number.isFinite(value)) {
    throw new HttpError(400, `'${key}' must be a valid number or null`)
  }

  return value
}

function parseCreateLibraBody(rawBody: unknown): LibraInput {
  if (rawBody === null || typeof rawBody !== "object" || Array.isArray(rawBody)) {
    throw new HttpError(400, "Request body must be a JSON object")
  }

  const body = rawBody as Record<string, unknown>
  const allowedFields = new Set([
    "id",
    "szfCode",
    "plateNumber",
    "assignedUserId",
    "amount",
    "manuallyLibra",
    "manuallyLibraComment",
    "taskFieldId",
  ])

  for (const field of Object.keys(body)) {
    if (!allowedFields.has(field)) {
      throw new HttpError(400, `Unknown libra field: '${field}'`)
    }
  }

  let id: string | undefined
  if (body.id !== undefined) {
    if (!isNonEmptyString(body.id)) {
      throw new HttpError(400, "'id' must be a non-empty string")
    }
    id = body.id
  }

  return {
    id,
    szfCode: parseNullableStringField(body, "szfCode"),
    plateNumber: parseNullableStringField(body, "plateNumber"),
    assignedUserId: parseNullableStringField(body, "assignedUserId"),
    amount: parseNullableNumberField(body, "amount"),
    manuallyLibra: parseNullableStringField(body, "manuallyLibra"),
    manuallyLibraComment: parseNullableStringField(body, "manuallyLibraComment"),
    taskFieldId: parseNullableStringField(body, "taskFieldId"),
  }
}

function parseCreateTaskFieldBody(rawBody: unknown): TaskFieldCreateInput {
  if (rawBody === null || typeof rawBody !== "object" || Array.isArray(rawBody)) {
    throw new HttpError(400, "Request body must be a JSON object")
  }

  const body = rawBody as Record<string, unknown>
  const allowedFields = new Set([
    "id",
    "pocketId",
    "name",
    "data",
    "type",
  ])

  for (const field of Object.keys(body)) {
    if (!allowedFields.has(field)) {
      throw new HttpError(400, `Unknown create task field field: '${field}'`)
    }
  }

  let id: string | undefined
  if (body.id !== undefined) {
    if (!isNonEmptyString(body.id)) {
      throw new HttpError(400, "'id' must be a non-empty string")
    }
    id = body.id
  }

  if (!isNonEmptyString(body.name)) {
    throw new HttpError(400, "'name' must be a non-empty string")
  }

  return {
    id,
    pocketId: parseNullableStringField(body, "pocketId"),
    name: body.name,
    data: parseNullableStringField(body, "data"),
    type: parseNullableStringField(body, "type"),
  }
}

function parseTaskEventField(rawBody: unknown, key: string): TaskEventFieldCreateInput {
  if (rawBody === null || typeof rawBody !== "object" || Array.isArray(rawBody)) {
    throw new HttpError(400, `'${key}' must be an object`)
  }

  const body = rawBody as Record<string, unknown>
  const allowedFields = new Set(["id", "name", "data", "type", "attachments"])

  for (const field of Object.keys(body)) {
    if (!allowedFields.has(field)) {
      throw new HttpError(400, `Unknown task event field field: '${key}.${field}'`)
    }
  }

  let id: string | undefined
  if (body.id !== undefined) {
    if (!isNonEmptyString(body.id)) {
      throw new HttpError(400, `'${key}.id' must be a non-empty string`)
    }
    id = body.id
  }

  if (!isNonEmptyString(body.name)) {
    throw new HttpError(400, `'${key}.name' must be a non-empty string`)
  }

  let attachments: AttachmentInput[] | undefined
  if (body.attachments !== undefined) {
    attachments = parseAttachments(body.attachments, `${key}.attachments`)
  }

  return {
    id,
    name: body.name,
    data: parseNullableStringField(body, "data"),
    type: parseNullableStringField(body, "type"),
    attachments,
  }
}

function parseCreateTaskEventBody(rawBody: unknown): TaskEventCreateInput {
  if (rawBody === null || typeof rawBody !== "object" || Array.isArray(rawBody)) {
    throw new HttpError(400, "Request body must be a JSON object")
  }

  const body = rawBody as Record<string, unknown>
  const allowedFields = new Set(["id", "name", "createdAt", "fields"])

  for (const field of Object.keys(body)) {
    if (!allowedFields.has(field)) {
      throw new HttpError(400, `Unknown task event field: '${field}'`)
    }
  }

  let id: string | undefined
  if (body.id !== undefined) {
    if (!isNonEmptyString(body.id)) {
      throw new HttpError(400, "'id' must be a non-empty string")
    }
    id = body.id
  }

  const name = parseNullableStringField(body, "name")

  let createdAt: Date | null | undefined
  if (body.createdAt !== undefined) {
    if (body.createdAt === null) {
      createdAt = null
    } else if (typeof body.createdAt === "string") {
      const parsedDate = new Date(body.createdAt)
      if (Number.isNaN(parsedDate.getTime())) {
        throw new HttpError(400, "Invalid 'createdAt' date format")
      }
      createdAt = parsedDate
    } else {
      throw new HttpError(400, "'createdAt' must be a date string or null")
    }
  }

  if (!Array.isArray(body.fields) || body.fields.length === 0) {
    throw new HttpError(400, "'fields' must be a non-empty array")
  }

  return {
    id,
    name,
    createdAt,
    fields: body.fields.map((field, index) =>
      parseTaskEventField(field, `fields[${index}]`)
    ),
  }
}

function parsePagination(req: Request) {
  const offset = parseIntQueryParam(req.query.offset, "offset", 0, 0)
  const limit = parseIntQueryParam(req.query.limit, "limit", DEFAULT_LIMIT, 1, MAX_LIMIT)

  return { offset, limit }
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0
}

function parseAttachments(value: unknown, key: string): AttachmentInput[] {
  if (!Array.isArray(value)) {
    throw new HttpError(400, `'${key}' must be an array`)
  }

  return value.map((item, index) => {
    if (item === null || typeof item !== "object" || Array.isArray(item)) {
      throw new HttpError(400, `'${key}[${index}]' must be an object`)
    }

    const attachment = item as Record<string, unknown>
    const allowedFields = new Set(["url", "type"])

    for (const itemKey of Object.keys(attachment)) {
      if (!allowedFields.has(itemKey)) {
        throw new HttpError(400, `Unknown attachment field: '${key}[${index}].${itemKey}'`)
      }
    }

    if (!isNonEmptyString(attachment.url)) {
      throw new HttpError(400, `'${key}[${index}].url' must be a non-empty string`)
    }

    if (attachment.type !== "photo" && attachment.type !== "file") {
      throw new HttpError(400, `'${key}[${index}].type' must be 'photo' or 'file'`)
    }

    return {
      url: attachment.url,
      type: attachment.type,
    }
  })
}

function parseProjectSearchFilters(rawValue: unknown): ProjectSearchFilters | undefined {
  if (rawValue === undefined) {
    return undefined
  }

  if (typeof rawValue !== "string") {
    throw new HttpError(400, "Invalid 'search' query param")
  }

  let parsed: unknown
  try {
    parsed = JSON.parse(rawValue)
  } catch {
    throw new HttpError(400, "Invalid 'search' JSON format")
  }

  if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new HttpError(400, "'search' must be a JSON object")
  }

  const searchObject = parsed as Record<string, unknown>
  const result: ProjectSearchFilters = {}

  if (searchObject.projectTitleContains !== undefined) {
    if (!isNonEmptyString(searchObject.projectTitleContains)) {
      throw new HttpError(400, "'search.projectTitleContains' must be a non-empty string")
    }

    result.projectTitleContains = searchObject.projectTitleContains
  }

  if (searchObject.szfCode !== undefined) {
    if (!isNonEmptyString(searchObject.szfCode)) {
      throw new HttpError(400, "'search.szfCode' must be a non-empty string")
    }

    result.szfCode = searchObject.szfCode
  }

  if (searchObject.portaNumber !== undefined) {
    if (searchObject.portaNumber !== 1 && searchObject.portaNumber !== 2) {
      throw new HttpError(400, "'search.portaNumber' must be 1 or 2")
    }

    result.portaNumber = searchObject.portaNumber
  }

  if (searchObject.orderBy !== undefined) {
    if (searchObject.orderBy !== "ASC" && searchObject.orderBy !== "DESC") {
      throw new HttpError(400, "'search.orderBy' must be 'ASC' or 'DESC'")
    }

    result.orderBy = searchObject.orderBy
  }

  if (searchObject.task !== undefined) {
    if (
      searchObject.task === null ||
      typeof searchObject.task !== "object" ||
      Array.isArray(searchObject.task)
    ) {
      throw new HttpError(400, "'search.task' must be a JSON object")
    }

    const taskObject = searchObject.task as Record<string, unknown>
    const taskFilter: NonNullable<ProjectSearchFilters["task"]> = {}

    if (taskObject.deadlineAfter !== undefined) {
      if (!isNonEmptyString(taskObject.deadlineAfter)) {
        throw new HttpError(400, "'search.task.deadlineAfter' must be a date string")
      }

      const parsedDate = new Date(taskObject.deadlineAfter)
      if (Number.isNaN(parsedDate.getTime())) {
        throw new HttpError(400, "Invalid 'search.task.deadlineAfter' date format")
      }

      taskFilter.deadlineAfter = parsedDate
    }

    if (taskObject.assignedUserId !== undefined) {
      if (!isNonEmptyString(taskObject.assignedUserId)) {
        throw new HttpError(400, "'search.task.assignedUserId' must be a non-empty string")
      }

      taskFilter.assignedUserId = taskObject.assignedUserId
    }

    if (taskObject.submittedUserId !== undefined) {
      if (!isNonEmptyString(taskObject.submittedUserId)) {
        throw new HttpError(400, "'search.task.submittedUserId' must be a non-empty string")
      }

      taskFilter.submittedUserId = taskObject.submittedUserId
    }

    if (taskObject.status !== undefined) {
      if (!isNonEmptyString(taskObject.status)) {
        throw new HttpError(400, "'search.task.status' must be a non-empty string")
      }

      taskFilter.status = taskObject.status
    }

    if (taskObject.pickupAddressContains !== undefined) {
      if (!isNonEmptyString(taskObject.pickupAddressContains)) {
        throw new HttpError(400, "'search.task.pickupAddressContains' must be a non-empty string")
      }

      taskFilter.pickupAddressContains = taskObject.pickupAddressContains
    }

    if (taskObject.deliveryAddressContains !== undefined) {
      if (!isNonEmptyString(taskObject.deliveryAddressContains)) {
        throw new HttpError(400, "'search.task.deliveryAddressContains' must be a non-empty string")
      }

      taskFilter.deliveryAddressContains = taskObject.deliveryAddressContains
    }

    if (taskObject.vontatoDataContains !== undefined) {
      if (!isNonEmptyString(taskObject.vontatoDataContains)) {
        throw new HttpError(400, "'search.task.vontatoDataContains' must be a non-empty string")
      }

      taskFilter.vontatoDataContains = taskObject.vontatoDataContains
    }

    if (taskObject.potkocsiDataContains !== undefined) {
      if (!isNonEmptyString(taskObject.potkocsiDataContains)) {
        throw new HttpError(400, "'search.task.potkocsiDataContains' must be a non-empty string")
      }

      taskFilter.potkocsiDataContains = taskObject.potkocsiDataContains
    }

    if (taskObject.taskFilter !== undefined) {
      if (taskObject.taskFilter !== "open" && taskObject.taskFilter !== "previous") {
        throw new HttpError(400, "'search.task.taskFilter' must be 'open' or 'previous'")
      }

      taskFilter.taskFilter = taskObject.taskFilter
    }

    if (Object.keys(taskFilter).length > 0) {
      result.task = taskFilter
    }
  }

  return Object.keys(result).length > 0 ? result : undefined
}

function parseIdParam(req: Request, key: "id") {
  const value = req.params[key]
  if (!isNonEmptyString(value)) {
    throw new HttpError(400, `Invalid '${key}' path param`)
  }

  return value
}

type PatchFieldDefinition =
  | { type: "string"; nonEmpty?: boolean }
  | { type: "nullableString"; nonEmpty?: boolean }
  | { type: "number" }
  | { type: "integer" }
  | { type: "boolean" }
  | { type: "nullableBoolean" }
  | { type: "date" }
  | { type: "nullableDate" }
  | { type: "attachments" }

function parsePatchBody<T extends Record<string, unknown>>(
  rawBody: unknown,
  allowedFields: Record<string, PatchFieldDefinition>
): T {
  if (rawBody === null || typeof rawBody !== "object" || Array.isArray(rawBody)) {
    throw new HttpError(400, "Request body must be a JSON object")
  }

  const bodyObject = rawBody as Record<string, unknown>
  const parsed: Record<string, unknown> = {}

  for (const [key, value] of Object.entries(bodyObject)) {
    const definition = allowedFields[key]

    if (!definition) {
      throw new HttpError(400, `Unknown patch field: '${key}'`)
    }

    if (value === undefined) {
      continue
    }

    switch (definition.type) {
      case "string":
        if (value === null) {
          continue
        }
        if (typeof value !== "string") {
          throw new HttpError(400, `'${key}' must be a string`)
        }
        if (definition.nonEmpty && value.trim().length === 0) {
          throw new HttpError(400, `'${key}' must be a non-empty string`)
        }
        parsed[key] = value
        break
      case "nullableString":
        if (value === null) {
          parsed[key] = null
          break
        }
        if (typeof value !== "string") {
          throw new HttpError(400, `'${key}' must be a string or null`)
        }
        if (definition.nonEmpty && value.trim().length === 0) {
          throw new HttpError(400, `'${key}' must be a non-empty string`)
        }
        parsed[key] = value
        break
      case "number":
        if (value === null) {
          continue
        }
        if (typeof value !== "number" || Number.isNaN(value) || !Number.isFinite(value)) {
          throw new HttpError(400, `'${key}' must be a valid number`)
        }
        parsed[key] = value
        break
      case "integer":
        if (value === null) {
          continue
        }
        if (typeof value !== "number" || !Number.isInteger(value)) {
          throw new HttpError(400, `'${key}' must be an integer`)
        }
        parsed[key] = value
        break
      case "boolean":
        if (value === null) {
          continue
        }
        if (typeof value !== "boolean") {
          throw new HttpError(400, `'${key}' must be a boolean`)
        }
        parsed[key] = value
        break
      case "nullableBoolean":
        if (value === null) {
          parsed[key] = null
          break
        }
        if (typeof value !== "boolean") {
          throw new HttpError(400, `'${key}' must be a boolean or null`)
        }
        parsed[key] = value
        break
      case "date": {
        if (value === null) {
          continue
        }
        if (typeof value !== "string") {
          throw new HttpError(400, `'${key}' must be a date string`)
        }
        const parsedDate = new Date(value)
        if (Number.isNaN(parsedDate.getTime())) {
          throw new HttpError(400, `Invalid '${key}' date format`)
        }
        parsed[key] = parsedDate
        break
      }
      case "nullableDate": {
        if (value === null) {
          parsed[key] = null
          break
        }
        if (typeof value !== "string") {
          throw new HttpError(400, `'${key}' must be a date string or null`)
        }
        const parsedDate = new Date(value)
        if (Number.isNaN(parsedDate.getTime())) {
          throw new HttpError(400, `Invalid '${key}' date format`)
        }
        parsed[key] = parsedDate
        break
      }
      case "attachments":
        parsed[key] = parseAttachments(value, key)
        break
    }
  }

  if (Object.keys(parsed).length === 0) {
    throw new HttpError(400, "No patchable fields provided")
  }

  return parsed as T
}

const taskPatchFields: Record<string, PatchFieldDefinition> = {
  id: { type: "string", nonEmpty: true },
  groupId: { type: "string", nonEmpty: true },
  projectId: { type: "string", nonEmpty: true },
  title: { type: "string", nonEmpty: true },
  desc: { type: "string" },
  status: { type: "string" },
  deadline: { type: "date" },
  createdAt: { type: "date" },
  fullAddress: { type: "string" },
  lat: { type: "number" },
  lng: { type: "number" },
  isPickUp: { type: "boolean" },
  accepted: { type: "boolean" },
  parkingSpot: { type: "nullableString" },
  assignedUserId: { type: "string" },
  assignedUserId2: { type: "string" },
  submittedUserId: { type: "string" },
}

const taskFieldPatchFields: Record<string, PatchFieldDefinition> = {
  id: { type: "string", nonEmpty: true },
  taskId: { type: "string", nonEmpty: true },
  pocketId: { type: "nullableString" },
  name: { type: "string", nonEmpty: true },
  data: { type: "nullableString" },
  type: { type: "string" },
  attachments: { type: "attachments" },
}

const inspectionPatchFields: Record<string, PatchFieldDefinition> = {
  id: { type: "string", nonEmpty: true },
  taskId: { type: "string", nonEmpty: true },
  key: { type: "string", nonEmpty: true },
  checked: { type: "boolean" },
  note: { type: "nullableString" },
  data: { type: "nullableString" },
}

const portaChecklistPatchFields: Record<string, PatchFieldDefinition> = {
  id: { type: "string", nonEmpty: true },
  taskId: { type: "string", nonEmpty: true },
  isUserChecked: { type: "nullableBoolean" },
  isTruckChecked: { type: "nullableBoolean" },
  isTrailerChecked: { type: "nullableBoolean" },
  isTraktorChecked: { type: "nullableBoolean" },
  isBioChecked: { type: "nullableBoolean" },
  isSzondaChecked: { type: "nullableBoolean" },
  isStarted: { type: "nullableBoolean" },
  startedAt: { type: "nullableDate" },
}

export async function getProjectsHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const pagination = parsePagination(req)
    const filters = parseProjectSearchFilters(req.query.search)
    const result = filters
      ? await searchProjects(filters, pagination)
      : await getProjects(pagination)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

export async function getProjectByIdHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const id = parseIdParam(req, "id")
    const project = await getProjectById(id)

    if (!project) {
      throw new HttpError(404, `Project not found: '${id}'`)
    }

    res.json(project)
  } catch (error) {
    next(error)
  }
}

export async function patchTaskByIdHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const id = parseIdParam(req, "id")
    const patchData = parsePatchBody<Prisma.TaskUncheckedUpdateInput>(req.body, taskPatchFields)
    const updatedTask = await patchTaskById(id, patchData)

    if (updatedTask === undefined) {
      throw new HttpError(404, `Task not found for id: '${id}'`)
    }

    if (updatedTask === null) {
      throw new HttpError(400, "No patchable fields provided")
    }

    res.json(updatedTask)
  } catch (error) {
    next(error)
  }
}

export async function patchTaskFieldByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseIdParam(req, "id")
    const patchData = parsePatchBody<TaskFieldPatchInput>(req.body, taskFieldPatchFields)
    const updatedField = await patchTaskFieldById(id, patchData)

    if (updatedField === undefined) {
      throw new HttpError(404, `Task field not found for id: '${id}'`)
    }

    if (updatedField === null) {
      throw new HttpError(400, "No patchable fields provided")
    }

    res.json(updatedField)
  } catch (error) {
    next(error)
  }
}

export async function createCommentByTaskIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseIdParam(req, "id")
    const commentInput = parseCreateCommentBody(req.body)
    const createdComment = await createCommentByTaskId(id, commentInput)

    if (!createdComment) {
      throw new HttpError(404, `Task not found for id: '${id}'`)
    }

    res.status(201).json(createdComment)
  } catch (error) {
    next(error)
  }
}

export async function createTaskFieldByTaskIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseIdParam(req, "id")
    const taskFieldInput = parseCreateTaskFieldBody(req.body)
    const createdTaskField = await createTaskFieldByTaskId(id, taskFieldInput)

    if (!createdTaskField) {
      throw new HttpError(404, `Task not found for id: '${id}'`)
    }

    res.status(201).json(createdTaskField)
  } catch (error) {
    next(error)
  }
}

export async function createTaskEventByTaskIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseIdParam(req, "id")
    const taskEventInput = parseCreateTaskEventBody(req.body)
    const createdTaskEvent = await createTaskEventByTaskId(id, taskEventInput)

    if (!createdTaskEvent) {
      throw new HttpError(404, `Task not found for id: '${id}'`)
    }

    res.status(201).json(createdTaskEvent)
  } catch (error) {
    next(error)
  }
}

export async function createInspectionsByTaskIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseIdParam(req, "id")
    const inspectionsInput = parseCreateInspectionsBody(req.body)
    const createdInspections = await createInspectionsByTaskId(id, inspectionsInput)

    if (!createdInspections) {
      throw new HttpError(404, `Task not found for id: '${id}'`)
    }

    res.status(201).json(createdInspections)
  } catch (error) {
    next(error)
  }
}

export async function patchInspectionByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseIdParam(req, "id")
    const patchData = parsePatchBody<InspectionPatchInput>(req.body, inspectionPatchFields)
    const updatedInspection = await patchInspectionById(id, patchData)

    if (updatedInspection === undefined) {
      throw new HttpError(404, `Inspection not found for id: '${id}'`)
    }

    if (updatedInspection === null) {
      throw new HttpError(400, "No patchable fields provided")
    }

    res.json(updatedInspection)
  } catch (error) {
    next(error)
  }
}

export async function createPortaChecklistByTaskIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseIdParam(req, "id")
    const portaChecklistInput = parseCreatePortaChecklistBody(req.body)
    const createdPortaChecklist = await createPortaChecklistByTaskId(id, portaChecklistInput)

    if (createdPortaChecklist === undefined) {
      throw new HttpError(404, `Task not found for id: '${id}'`)
    }

    if (createdPortaChecklist === null) {
      throw new HttpError(400, `Porta checklist already exists for task id: '${id}'`)
    }

    res.status(201).json(createdPortaChecklist)
  } catch (error) {
    next(error)
  }
}

export async function patchPortaChecklistByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseIdParam(req, "id")
    const patchData = parsePatchBody<PortaChecklistPatchInput>(req.body, portaChecklistPatchFields)
    const updatedPortaChecklist = await patchPortaChecklistById(id, patchData)

    if (updatedPortaChecklist === undefined) {
      throw new HttpError(404, `Porta checklist not found for id: '${id}'`)
    }

    if (updatedPortaChecklist === null) {
      throw new HttpError(400, "No patchable fields provided")
    }

    res.json(updatedPortaChecklist)
  } catch (error) {
    next(error)
  }
}

export async function createLibraByTaskIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseIdParam(req, "id")
    const libraInput = parseCreateLibraBody(req.body)
    const createdLibra = await createLibraByTaskId(id, libraInput)

    if (createdLibra === undefined) {
      throw new HttpError(404, `Task not found for id: '${id}'`)
    }

    if (createdLibra === null) {
      throw new HttpError(400, `Libra already exists for task id: '${id}'`)
    }

    if (createdLibra === false) {
      throw new HttpError(400, "Invalid 'taskFieldId': task field does not belong to the task")
    }

    res.status(201).json(createdLibra)
  } catch (error) {
    next(error)
  }
}

export async function deleteAttachmentByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseIdParam(req, "id")
    const deletedAttachment = await deleteAttachmentById(id)

    if (!deletedAttachment) {
      throw new HttpError(404, `Attachment not found for id: '${id}'`)
    }

    res.json(deletedAttachment)
  } catch (error) {
    next(error)
  }
}
