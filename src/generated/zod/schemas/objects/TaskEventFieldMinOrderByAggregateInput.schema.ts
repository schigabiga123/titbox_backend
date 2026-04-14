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
export const TaskEventFieldMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TaskEventFieldMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldMinOrderByAggregateInput>;
export const TaskEventFieldMinOrderByAggregateInputObjectZodSchema = makeSchema();
