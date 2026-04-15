import { NextFunction, Request, Response } from "express"

import { syncTasks } from "../firebase/update_projects"

export async function runUpdateProjectsJobHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const stats = await syncTasks()

    res.status(200).json({
      ok: true,
      job: "update-projects",
      triggeredAt: new Date().toISOString(),
      stats,
    })
  } catch (error) {
    next(error)
  }
}
