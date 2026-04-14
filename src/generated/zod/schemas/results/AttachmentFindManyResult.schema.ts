import * as z from 'zod';
export const AttachmentFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  url: z.string(),
  type: z.unknown(),
  commentId: z.string().optional(),
  taskFieldId: z.string().optional(),
  taskEventFieldId: z.string().optional(),
  createdAt: z.date().optional(),
  comment: z.unknown().optional(),
  taskField: z.unknown().optional(),
  taskEventField: z.unknown().optional()
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