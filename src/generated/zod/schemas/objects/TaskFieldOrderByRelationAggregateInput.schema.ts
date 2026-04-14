import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TaskFieldOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TaskFieldOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldOrderByRelationAggregateInput>;
export const TaskFieldOrderByRelationAggregateInputObjectZodSchema = makeSchema();
