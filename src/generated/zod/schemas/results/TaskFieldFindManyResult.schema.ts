import * as z from 'zod';
export const TaskFieldFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  taskId: z.string(),
  pocketId: z.string().optional(),
  name: z.string(),
  data: z.string().optional(),
  type: z.string().optional(),
  task: z.unknown(),
  attachments: z.array(z.unknown()),
  libra: z.unknown().optional()
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