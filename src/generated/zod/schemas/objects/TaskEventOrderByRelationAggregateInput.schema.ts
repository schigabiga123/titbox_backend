import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TaskEventOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TaskEventOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventOrderByRelationAggregateInput>;
export const TaskEventOrderByRelationAggregateInputObjectZodSchema = makeSchema();
