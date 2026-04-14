import * as z from 'zod';
export const CommentUpsertResultSchema = z.object({
  id: z.string(),
  taskId: z.string(),
  text: z.string(),
  submittedUserId: z.string().optional(),
  createdAt: z.date().optional(),
  task: z.unknown(),
  taggedUsers: z.array(z.unknown()),
  attachments: z.array(z.unknown())
});