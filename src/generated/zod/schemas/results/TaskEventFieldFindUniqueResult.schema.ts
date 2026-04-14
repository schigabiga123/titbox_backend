import * as z from 'zod';
export const TaskEventFieldFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  taskEventId: z.string(),
  name: z.string(),
  data: z.string().optional(),
  type: z.string().optional(),
  taskEvent: z.unknown(),
  attachments: z.array(z.unknown())
}));