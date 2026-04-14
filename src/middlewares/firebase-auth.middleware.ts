import { NextFunction, Request, Response } from "express"

import { HttpError } from "./error.middleware"
import { ensureFirebaseAdminInitialized } from "../firebase/firebase_admin"

const FIREBASE_AUTH_ENABLED = process.env.FIREBASE_AUTH_ENABLED !== "false"

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

export async function requireFirebaseAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!FIREBASE_AUTH_ENABLED) {
    next()
    return
  }

  const token = extractBearerToken(req.header("authorization"))

  if (!token) {
    next(new HttpError(401, "Missing or invalid Authorization header"))
    return
  }

  try {
    const admin = ensureFirebaseAdminInitialized()
    const decodedToken = await admin.auth().verifyIdToken(token, true)

    res.locals.firebaseUser = decodedToken
    next()
  } catch {
    next(new HttpError(401, "Invalid Firebase token"))
  }
}
