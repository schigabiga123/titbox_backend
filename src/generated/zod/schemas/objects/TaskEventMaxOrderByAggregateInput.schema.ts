import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const TaskEventMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TaskEventMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventMaxOrderByAggregateInput>;
export const TaskEventMaxOrderByAggregateInputObjectZodSchema = makeSchema();
