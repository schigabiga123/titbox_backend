import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  lat: SortOrderSchema.optional(),
  lng: SortOrderSchema.optional()
}).strict();
export const TaskAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TaskAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskAvgOrderByAggregateInput>;
export const TaskAvgOrderByAggregateInputObjectZodSchema = makeSchema();
