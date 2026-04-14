import { runProjectSync } from "./project_sync_shared"

const API_URLS = [
  "https://defaultfae7a12b88fe4737bc7d4a19c8b56b.8e.environment.api.powerplatform.com/powerautomate/automations/direct/workflows/d01e04f163bb4c6ba028989d966f0f63/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9JFyCAy4EySU-0JTjyolMz9AezwN1ufR3AowZ-9baF8",
] as const

export async function syncTasksByMinutes() {
  return runProjectSync({
    apiUrls: API_URLS,
    runnerName: "update_projects_by_minutes",
    scheduleType: "minute",
  })
}

if (require.main === module) {
  void syncTasksByMinutes()
}
