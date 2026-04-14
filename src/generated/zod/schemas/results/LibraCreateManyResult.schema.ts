import * as z from 'zod';
export const LibraCreateManyResultSchema = z.object({
  count: z.number()
});