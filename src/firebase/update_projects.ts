import { runProjectSync } from "./project_sync_shared"

const API_URLS = [
  "https://defaultfae7a12b88fe4737bc7d4a19c8b56b.8e.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/91106111363c46ea8f13bbc39dfb1168/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=5yMFNvCEH2Fw7Q-3-IxZJVseb2yS5GWTNXCUc3e7jbs",
  "https://defaultfae7a12b88fe4737bc7d4a19c8b56b.8e.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/8f80fd02b21748a9b88c33d5dec3fb4a/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=2febNBmheB_SvSU4--nx5rKZA5MgJcZwDURDZYK8SDc",
  "https://defaultfae7a12b88fe4737bc7d4a19c8b56b.8e.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/71331dab49e046ea941fc22c49b61549/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=PeU5rmFDX7trqgu6_zE3J9-NfdTxJajAaJXMgN_hfhM",
  "https://defaultfae7a12b88fe4737bc7d4a19c8b56b.8e.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/7e0252614a184b60aedacff6cf356bbd/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=T7epJhgiPnTQf-A3DidaqUUYgMdJ7pEXSsVAoNxLrik",
  "https://defaultfae7a12b88fe4737bc7d4a19c8b56b.8e.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/6bae88b9aedf43c48cbffa1e82bf468f/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=-fZvnUIvKGhVaJwMVQcf9VjLzd16-i8qgdLu6GAZCfY",
  "https://defaultfae7a12b88fe4737bc7d4a19c8b56b.8e.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/f46803375d614a95a3570c3368036159/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=g5SnR6nI0ucYynK6zUdlfrTirFa_qwJb3FEpTb6b9OA",
  "https://defaultfae7a12b88fe4737bc7d4a19c8b56b.8e.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/b1780cc2b98441acb9b5255816ec97bd/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=cM1DRYwwNSt_7B4xw1ldbyoPnWe-ML7r6R45B3jUAZQ",
  "https://defaultfae7a12b88fe4737bc7d4a19c8b56b.8e.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/4abf66026b614705bb79ecfd60f7c21b/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Dck4i1ZnKCTIN7G1qBv3xA8z0Gydp3kgIrthwN7anyU",
] as const

export async function syncTasks() {
  return runProjectSync({
    apiUrls: API_URLS,
    runnerName: "update_projects",
    scheduleType: "quarter_hour",
  })
}

if (require.main === module) {
  void syncTasks()
}
