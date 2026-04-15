import * as z from 'zod';
export const NotificationLogFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  createdAt: z.date(),
  userId: z.string(),
  notification: z.unknown(),
  taskId: z.string(),
  subTaskId: z.string().optional(),
  commentId: z.string().optional(),
  finished: z.boolean(),
  deadline: z.boolean()
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