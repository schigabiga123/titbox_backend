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
export const TaskFieldMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TaskFieldMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldMaxOrderByAggregateInput>;
export const TaskFieldMaxOrderByAggregateInputObjectZodSchema = makeSchema();
