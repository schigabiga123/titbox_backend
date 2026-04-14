import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  amount: z.literal(true).optional()
}).strict();
export const LibraAvgAggregateInputObjectSchema: z.ZodType<Prisma.LibraAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LibraAvgAggregateInputType>;
export const LibraAvgAggregateInputObjectZodSchema = makeSchema();
