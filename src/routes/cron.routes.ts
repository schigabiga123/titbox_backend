import { Router } from "express"

import { runUpdateProjectsJobHandler } from "../controllers/cron.controller"

const router = Router()

router.post("/update-projects", runUpdateProjectsJobHandler)

export default router
