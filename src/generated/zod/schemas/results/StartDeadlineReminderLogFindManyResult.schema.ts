import * as z from 'zod';
export const StartDeadlineReminderLogFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  createdAt: z.date(),
  sentAt: z.date(),
  taskId: z.string(),
  projectId: z.string().optional(),
  userId: z.string(),
  recipientRole: z.string().optional(),
  task: z.unknown(),
  project: z.unknown().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});