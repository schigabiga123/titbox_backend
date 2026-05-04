import { NextFunction, Request, Response } from "express"

import { HttpError } from "../middlewares/error.middleware"
import {
  getNotificationsByUserId,
  sendManualPushToUser,
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
