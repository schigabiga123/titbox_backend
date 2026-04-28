import { NextFunction, Request, Response } from "express"

import { HttpError } from "../middlewares/error.middleware"
import { getNotificationsByUserId } from "../services/notification.service"

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
