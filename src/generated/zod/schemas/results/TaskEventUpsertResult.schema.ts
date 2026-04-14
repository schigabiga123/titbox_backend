import * as z from 'zod';
export const TaskEventUpsertResultSchema = z.object({
  id: z.string(),
  taskId: z.string(),
  name: z.string().optional(),
  createdAt: z.date().optional(),
  task: z.unknown(),
  fields: z.array(z.unknown())
});