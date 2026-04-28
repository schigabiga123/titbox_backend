import { Router } from "express"

import { getNotificationsByUserIdHandler } from "../controllers/notification.controller"

const router = Router()

router.get("/user/:userId", getNotificationsByUserIdHandler)
router.get("/:userId", getNotificationsByUserIdHandler)

export default router
