import * as z from 'zod';
export const StartDeadlineReminderLogCreateResultSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  sentAt: z.date(),
  taskId: z.string(),
  projectId: z.string().optional(),
  userId: z.string(),
  recipientRole: z.string().optional(),
  task: z.unknown(),
  project: z.unknown().optional()
});