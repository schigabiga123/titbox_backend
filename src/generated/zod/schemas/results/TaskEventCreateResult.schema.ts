import * as z from 'zod';
export const TaskEventCreateResultSchema = z.object({
  id: z.string(),
  taskId: z.string(),
  name: z.string().optional(),
  status: z.string(),
  createdAt: z.date().optional(),
  task: z.unknown(),
  fields: z.array(z.unknown())
});