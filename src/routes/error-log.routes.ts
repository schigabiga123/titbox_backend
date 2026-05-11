import { Router } from "express"

import { createErrorLogHandler } from "../controllers/error-log.controller"

const router = Router()

router.post("/", createErrorLogHandler)

export default router
