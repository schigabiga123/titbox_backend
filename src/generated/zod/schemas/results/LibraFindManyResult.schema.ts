import * as z from 'zod';
export const LibraFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  projectId: z.string(),
  taskId: z.string(),
  szfCode: z.string().optional(),
  plateNumber: z.string().optional(),
  assignedUserId: z.string().optional(),
  amount: z.number().optional(),
  manuallyLibra: z.string().optional(),
  manuallyLibraComment: z.string().optional(),
  taskFieldId: z.string().optional(),
  task: z.unknown(),
  taskField: z.unknown().optional()
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