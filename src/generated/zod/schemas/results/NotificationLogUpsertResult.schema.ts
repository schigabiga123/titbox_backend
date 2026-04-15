import * as z from 'zod';
export const NotificationLogUpsertResultSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  userId: z.string(),
  notification: z.unknown(),
  taskId: z.string(),
  subTaskId: z.string().optional(),
  commentId: z.string().optional(),
  finished: z.boolean(),
  deadline: z.boolean()
});