import { NextFunction, Request, Response } from "express"
import type { DecodedIdToken } from "firebase-admin/auth"

import { createAuditLog } from "../services/audit.service"

const AUDITED_METHODS = new Set(["POST", "PATCH"])

export function auditMutations(req: Request, res: Response, next: NextFunction) {
  if (!AUDITED_METHODS.has(req.method.toUpperCase())) {
    next()
    return
  }

  let responseBody: unknown
  const originalJson = res.json.bind(res)

  res.json = ((body: unknown) => {
    responseBody = body
    return originalJson(body)
  }) as Response["json"]

  res.on("finish", () => {
    const firebaseUser = res.locals.firebaseUser as DecodedIdToken | undefined
    const isSuccess = res.statusCode < 400
    const errorMessage =
      !isSuccess && responseBody && typeof responseBody === "object" && "error" in responseBody
        ? String((responseBody as Record<string, unknown>).error)
        : null

    void createAuditLog({
      success: isSuccess,
      method: req.method,
      path: req.originalUrl,
      routePath: req.route?.path,
      responseStatus: res.statusCode,
      firebaseUid: firebaseUser?.uid ?? null,
      firebaseEmail: firebaseUser?.email ?? null,
      errorMessage,
      params: req.params,
      query: req.query,
      body: req.body,
      responseBody,
    }).catch((error) => {
      console.error("Failed to write audit log", error)
    })
  })

  next()
}
