import * as z from 'zod';
export const InspectionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  taskId: z.string(),
  key: z.string(),
  checked: z.boolean(),
  note: z.string().optional(),
  data: z.string().optional(),
  task: z.unknown()
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