import { NextFunction, Request, Response } from "express"

import { syncTasks } from "../firebase/update_projects"
import { runStartDeadlineReminderJob } from "../jobs/start_deadline_reminder"

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

export async function runStartDeadlineReminderJobHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const stats = await runStartDeadlineReminderJob()

    res.status(200).json({
      ok: true,
      job: "start-deadline-reminder",
      triggeredAt: new Date().toISOString(),
      stats,
    })
  } catch (error) {
    next(error)
  }
}
