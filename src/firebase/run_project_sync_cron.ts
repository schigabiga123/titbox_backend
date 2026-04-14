import { syncTasks } from "./update_projects"
import { syncTasksByMinutes } from "./update_projects_by_minutes"

function shouldRunFullProjectSync(currentDate: Date) {
  return currentDate.getMinutes() % 15 === 0
}

async function runProjectSyncCron() {
  const now = new Date()
  const runFullSync = shouldRunFullProjectSync(now)
  const runnerName = runFullSync ? "update_projects" : "update_projects_by_minutes"

  console.log(
    `[project_sync_cron] Triggered at ${now.toISOString()} | minute=${now.getMinutes()} | selected runner=${runnerName}`
  )

  if (runFullSync) {
    await syncTasks()
    return
  }

  await syncTasksByMinutes()
}

void runProjectSyncCron()
