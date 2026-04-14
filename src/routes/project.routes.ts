import {
  createCommentByTaskIdHandler,
  createInspectionsByTaskIdHandler,
  createLibraByTaskIdHandler,
  createTaskEventByTaskIdHandler,
  createTaskFieldByTaskIdHandler,
  createPortaChecklistByTaskIdHandler,
  deleteAttachmentByIdHandler,
  getProjectByIdHandler,
  getProjectsHandler,
  patchInspectionByIdHandler,
  patchPortaChecklistByIdHandler,
  patchTaskByIdHandler,
  patchTaskFieldByIdHandler,
} from "../controllers/project.controller"

import { Router } from "express"

const router = Router()

router.get("/", getProjectsHandler)
router.get("/:id", getProjectByIdHandler)
router.patch("/tasks/:id", patchTaskByIdHandler)
router.patch("/fields/:id", patchTaskFieldByIdHandler)
router.patch("/inspections/:id", patchInspectionByIdHandler)
router.patch("/porta-checklists/:id", patchPortaChecklistByIdHandler)
router.patch("/task/:id", patchTaskByIdHandler)
router.patch("/field/:id", patchTaskFieldByIdHandler)
router.patch("/inspection/:id", patchInspectionByIdHandler)
router.patch("/porta-checklist/:id", patchPortaChecklistByIdHandler)
router.post("/tasks/:id/comments", createCommentByTaskIdHandler)
router.post("/tasks/:id/events", createTaskEventByTaskIdHandler)
router.post("/tasks/:id/inspections", createInspectionsByTaskIdHandler)
router.post("/tasks/:id/libra", createLibraByTaskIdHandler)
router.post("/tasks/:id/fields", createTaskFieldByTaskIdHandler)
router.post("/tasks/:id/porta-checklist", createPortaChecklistByTaskIdHandler)
router.post("/task/:id/comment", createCommentByTaskIdHandler)
router.post("/task/:id/event", createTaskEventByTaskIdHandler)
router.post("/task/:id/inspection", createInspectionsByTaskIdHandler)
router.post("/task/:id/libra", createLibraByTaskIdHandler)
router.post("/task/:id/field", createTaskFieldByTaskIdHandler)
router.post("/task/:id/porta-checklist", createPortaChecklistByTaskIdHandler)
router.delete("/attachments/:id", deleteAttachmentByIdHandler)
router.delete("/attachment/:id", deleteAttachmentByIdHandler)

export default router
