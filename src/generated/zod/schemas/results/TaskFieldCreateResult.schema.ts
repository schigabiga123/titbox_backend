import * as z from 'zod';
export const TaskFieldCreateResultSchema = z.object({
  id: z.string(),
  taskId: z.string(),
  pocketId: z.string().optional(),
  name: z.string(),
  data: z.string().optional(),
  type: z.string().optional(),
  task: z.unknown(),
  attachments: z.array(z.unknown()),
  libra: z.unknown().optional()
});