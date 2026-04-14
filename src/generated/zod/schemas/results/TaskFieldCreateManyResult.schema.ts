import * as z from 'zod';
export const TaskFieldCreateManyResultSchema = z.object({
  count: z.number()
});