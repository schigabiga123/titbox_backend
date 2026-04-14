import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  amount: z.literal(true).optional()
}).strict();
export const LibraSumAggregateInputObjectSchema: z.ZodType<Prisma.LibraSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LibraSumAggregateInputType>;
export const LibraSumAggregateInputObjectZodSchema = makeSchema();
