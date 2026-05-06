import { NextFunction, Request, Response } from "express"

import { syncTasks } from "../firebase/update_projects"
import { runStartDeadlineReminderJob } from "../jobs/start_deadline_reminder"

let isUpdateProjectsJobRunning = false

export async function runUpdateProjectsJobHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const triggeredAt = new Date().toISOString()

  if (isUpdateProjectsJobRunning) {
    res.status(200).json({
      ok: true,
      job: "update-projects",
      status: "already-running",
      triggeredAt,
    })
    return
  }

  isUpdateProjectsJobRunning = true

  void syncTasks()
    .catch((error) => {
      console.error("update-projects cron job failed", error)
    })
    .finally(() => {
      isUpdateProjectsJobRunning = false
    })

  res.status(200).json({
    ok: true,
    job: "update-projects",
    status: "started",
    triggeredAt,
  })
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
