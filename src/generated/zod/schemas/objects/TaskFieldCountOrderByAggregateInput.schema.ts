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
export const TaskFieldCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TaskFieldCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldCountOrderByAggregateInput>;
export const TaskFieldCountOrderByAggregateInputObjectZodSchema = makeSchema();
