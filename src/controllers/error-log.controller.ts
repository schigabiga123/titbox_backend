import { NextFunction, Request, Response } from "express"
import type { DecodedIdToken } from "firebase-admin/auth"

import { HttpError } from "../middlewares/error.middleware"
import { createErrorLog } from "../services/error-log.service"

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0
}

function parseCreateErrorLogBody(rawBody: unknown) {
  if (rawBody === null || typeof rawBody !== "object" || Array.isArray(rawBody)) {
    throw new HttpError(400, "Request body must be a JSON object")
  }

  const body = rawBody as Record<string, unknown>
  const allowedFields = new Set(["url", "statusCode", "data"])

  for (const key of Object.keys(body)) {
    if (!allowedFields.has(key)) {
      throw new HttpError(400, `Unknown error log field: '${key}'`)
    }
  }

  if (!isNonEmptyString(body.url)) {
    throw new HttpError(400, "'url' must be a non-empty string")
  }

  let statusCode: number | null | undefined
  if (body.statusCode !== undefined) {
    if (body.statusCode === null) {
      statusCode = null
    } else if (typeof body.statusCode === "number" && Number.isInteger(body.statusCode)) {
      statusCode = body.statusCode
    } else {
      throw new HttpError(400, "'statusCode' must be an integer or null")
    }
  }

  let data: string | null | undefined
  if (body.data !== undefined) {
    if (body.data === null) {
      data = null
    } else if (typeof body.data === "string") {
      data = body.data
    } else {
      throw new HttpError(400, "'data' must be a string or null")
    }
  }

  return {
    url: body.url,
    statusCode,
    data,
  }
}

export async function createErrorLogHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const firebaseUser = res.locals.firebaseUser as DecodedIdToken | undefined

    if (!firebaseUser?.uid) {
      throw new HttpError(401, "Missing authenticated user")
    }

    const input = parseCreateErrorLogBody(req.body)
    const errorLog = await createErrorLog({
      userId: firebaseUser.uid,
      ...input,
    })

    res.status(201).json(errorLog)
  } catch (error) {
    next(error)
  }
}
