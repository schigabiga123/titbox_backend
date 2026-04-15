import { NextFunction, Request, Response } from "express"

export class HttpError extends Error {
  statusCode: number

  constructor(statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
    this.name = "HttpError"
  }
}

export function notFoundHandler(req: Request, res: Response, next: NextFunction) {
  next(new HttpError(404, `Route not found: ${req.method} ${req.originalUrl}`))
}

export function errorHandler(
  err: Error | HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (res.headersSent) {
    return next(err)
  }

  const statusCode = err instanceof HttpError ? err.statusCode : 500
  const message = statusCode === 500 ? "Internal server error" : err.message

  if (statusCode === 500) {
    console.error("Unhandled error", {
      method: req.method,
      url: req.originalUrl,
      message: err.message,
      stack: err.stack,
    })
  }

  res.status(statusCode).json({
    error: message,
  })
}
