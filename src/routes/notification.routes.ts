import { Router } from "express"

import {
  getNotificationsByUserIdHandler,
  sendManualPushToUserHandler,
} from "../controllers/notification.controller"

const router = Router()

router.post("/user/:userId/push", sendManualPushToUserHandler)
router.post("/:userId/push", sendManualPushToUserHandler)
router.get("/user/:userId", getNotificationsByUserIdHandler)
router.get("/:userId", getNotificationsByUserIdHandler)

export default router
