import * as z from 'zod';
export const TaskEventFieldFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  taskEventId: z.string(),
  name: z.string(),
  data: z.string().optional(),
  type: z.string().optional(),
  taskEvent: z.unknown(),
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