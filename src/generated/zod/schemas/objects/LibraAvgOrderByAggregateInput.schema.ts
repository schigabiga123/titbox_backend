import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  amount: SortOrderSchema.optional()
}).strict();
export const LibraAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LibraAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraAvgOrderByAggregateInput>;
export const LibraAvgOrderByAggregateInputObjectZodSchema = makeSchema();
