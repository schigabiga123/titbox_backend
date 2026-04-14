import * as z from 'zod';
export const InspectionCreateResultSchema = z.object({
  id: z.string(),
  taskId: z.string(),
  key: z.string(),
  checked: z.boolean(),
  note: z.string().optional(),
  data: z.string().optional(),
  task: z.unknown()
});