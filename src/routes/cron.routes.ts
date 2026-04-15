import { Router } from "express"

import {
  runStartDeadlineReminderJobHandler,
  runUpdateProjectsJobHandler,
} from "../controllers/cron.controller"

const router = Router()

router.post("/update-projects", runUpdateProjectsJobHandler)
router.post("/start-deadline-reminder", runStartDeadlineReminderJobHandler)

export default router
