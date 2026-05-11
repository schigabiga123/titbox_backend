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
  const token = extractBearerToken(req.header("authorization"))

  if (!FIREBASE_AUTH_ENABLED) {
    if (token) {
      try {
        const admin = ensureFirebaseAdminInitialized()
        res.locals.firebaseUser = await admin.auth().verifyIdToken(token, true)
      } catch (error) {
        console.warn("Firebase auth is disabled; could not hydrate firebaseUser from token", error)
      }
    }

    next()
    return
  }

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
