import { NextFunction, Request, Response } from "express"

import { HttpError } from "./error.middleware"

function extractBearerToken(authorizationHeader: string | undefined) {
  if (!authorizationHeader) {
    return null
  }

  const [scheme, token] = authorizationHeader.split(" ")
  if (scheme !== "Bearer" || !token) {
    return null
  }

  return token
}

export function requireCronSecret(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const configuredSecret = process.env.CRON_JOB_SECRET

  if (!configuredSecret) {
    next(new HttpError(500, "CRON_JOB_SECRET env var is not configured"))
    return
  }

  const bearerToken = extractBearerToken(req.header("authorization"))
  const headerSecret = req.header("x-cron-secret")
  const providedSecret = bearerToken ?? headerSecret ?? null

  if (!providedSecret) {
    next(new HttpError(401, "Missing cron authentication secret"))
    return
  }

  if (providedSecret !== configuredSecret) {
    next(new HttpError(401, "Invalid cron authentication secret"))
    return
  }

  next()
}
