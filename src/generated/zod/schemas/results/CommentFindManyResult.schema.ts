import * as z from 'zod';
export const CommentFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  taskId: z.string(),
  text: z.string(),
  submittedUserId: z.string().optional(),
  createdAt: z.date().optional(),
  task: z.unknown(),
  taggedUsers: z.array(z.unknown()),
  attachments: z.array(z.unknown())
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