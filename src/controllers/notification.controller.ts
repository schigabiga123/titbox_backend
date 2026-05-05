import { NextFunction, Request, Response } from "express"
import { Prisma } from "@prisma/client"

import { HttpError } from "../middlewares/error.middleware"
import {
  getNotificationsByUserId,
  sendManualPushToUser,
  updateNotificationById,
} from "../services/notification.service"

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0
}

function parseUserIdParam(req: Request) {
  const userId = req.params.userId
  if (!isNonEmptyString(userId)) {
    throw new HttpError(400, "Invalid 'userId' path param")
  }

  return userId
}

function parseNotificationIdParam(req: Request) {
  const id = req.params.id
  if (!isNonEmptyString(id)) {
    throw new HttpError(400, "Invalid 'id' path param")
  }

  return id
}

function parseManualPushBody(rawBody: unknown) {
  if (!rawBody || typeof rawBody !== "object" || Array.isArray(rawBody)) {
    throw new HttpError(400, "Request body must be a JSON object")
  }

  const body = rawBody as Record<string, unknown>
  const allowedFields = new Set(["title", "body", "taskId"])

  for (const field of Object.keys(body)) {
    if (!allowedFields.has(field)) {
      throw new HttpError(400, `Unknown manual push field: '${field}'`)
    }
  }

  if (body.title !== undefined && !isNonEmptyString(body.title)) {
    throw new HttpError(400, "'title' must be a non-empty string")
  }

  if (!isNonEmptyString(body.body)) {
    throw new HttpError(400, "'body' must be a non-empty string")
  }

  if (body.taskId !== undefined && !isNonEmptyString(body.taskId)) {
    throw new HttpError(400, "'taskId' must be a non-empty string")
  }

  return {
    title: isNonEmptyString(body.title) ? body.title : "Titbox",
    body: body.body,
    taskId: isNonEmptyString(body.taskId) ? body.taskId : undefined,
  }
}

function parseNotificationPatchBody(rawBody: unknown) {
  if (!rawBody || typeof rawBody !== "object" || Array.isArray(rawBody)) {
    throw new HttpError(400, "Request body must be a JSON object")
  }

  const body = rawBody as Record<string, unknown>
  const allowedFields = new Set(["dateOfSeen"])

  for (const field of Object.keys(body)) {
    if (!allowedFields.has(field)) {
      throw new HttpError(400, `Unknown notification patch field: '${field}'`)
    }
  }

  if (!Object.prototype.hasOwnProperty.call(body, "dateOfSeen")) {
    throw new HttpError(400, "At least one patch field is required")
  }

  const rawDateOfSeen = body.dateOfSeen
  if (rawDateOfSeen !== null && typeof rawDateOfSeen !== "string") {
    throw new HttpError(400, "'dateOfSeen' must be an ISO datetime string or null")
  }

  if (typeof rawDateOfSeen === "string") {
    const parsedDate = new Date(rawDateOfSeen)
    if (Number.isNaN(parsedDate.getTime())) {
      throw new HttpError(400, "'dateOfSeen' must be a valid ISO datetime string")
    }

    return {
      dateOfSeen: parsedDate,
    }
  }

  return {
    dateOfSeen: null,
  }
}

export async function getNotificationsByUserIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = parseUserIdParam(req)
    const notifications = await getNotificationsByUserId(userId)

    res.json(notifications)
  } catch (error) {
    next(error)
  }
}

export async function sendManualPushToUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = parseUserIdParam(req)
    const input = parseManualPushBody(req.body)

    await sendManualPushToUser(
      userId,
      {
        title: input.title,
        body: input.body,
      },
      input.taskId
    )

    res.status(201).json({
      ok: true,
      userId,
      notification: {
        title: input.title,
        body: input.body,
      },
    })
  } catch (error) {
    next(error)
  }
}

export async function patchNotificationByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseNotificationIdParam(req)
    const input = parseNotificationPatchBody(req.body)
    const notification = await updateNotificationById(id, input)

    res.json(notification)
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      next(new HttpError(404, "Notification not found"))
      return
    }

    next(error)
  }
}
