import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  pocketId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  data: SortOrderSchema.optional(),
  type: SortOrderSchema.optional()
}).strict();
export const TaskFieldMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TaskFieldMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldMinOrderByAggregateInput>;
export const TaskFieldMinOrderByAggregateInputObjectZodSchema = makeSchema();
