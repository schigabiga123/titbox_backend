import * as z from 'zod';
export const LibraDeleteManyResultSchema = z.object({
  count: z.number()
});