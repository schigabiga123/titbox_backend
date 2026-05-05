import { Router } from "express"

import {
  getNotificationsByUserIdHandler,
  patchNotificationByIdHandler,
  sendManualPushToUserHandler,
} from "../controllers/notification.controller"

const router = Router()

router.post("/user/:userId/push", sendManualPushToUserHandler)
router.post("/:userId/push", sendManualPushToUserHandler)
router.patch("/:id", patchNotificationByIdHandler)
router.get("/user/:userId", getNotificationsByUserIdHandler)
router.get("/:userId", getNotificationsByUserIdHandler)

export default router
