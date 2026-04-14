import * as z from 'zod';
export const LibraUpsertResultSchema = z.object({
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
});