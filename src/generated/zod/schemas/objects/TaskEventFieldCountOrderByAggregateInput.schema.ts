import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  taskEventId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  data: SortOrderSchema.optional(),
  type: SortOrderSchema.optional()
}).strict();
export const TaskEventFieldCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TaskEventFieldCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldCountOrderByAggregateInput>;
export const TaskEventFieldCountOrderByAggregateInputObjectZodSchema = makeSchema();
