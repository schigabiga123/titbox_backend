import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TaskEventFieldOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TaskEventFieldOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldOrderByRelationAggregateInput>;
export const TaskEventFieldOrderByRelationAggregateInputObjectZodSchema = makeSchema();
