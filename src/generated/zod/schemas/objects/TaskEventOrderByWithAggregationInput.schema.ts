import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TaskEventCountOrderByAggregateInputObjectSchema as TaskEventCountOrderByAggregateInputObjectSchema } from './TaskEventCountOrderByAggregateInput.schema';
import { TaskEventMaxOrderByAggregateInputObjectSchema as TaskEventMaxOrderByAggregateInputObjectSchema } from './TaskEventMaxOrderByAggregateInput.schema';
import { TaskEventMinOrderByAggregateInputObjectSchema as TaskEventMinOrderByAggregateInputObjectSchema } from './TaskEventMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => TaskEventCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TaskEventMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TaskEventMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TaskEventOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TaskEventOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventOrderByWithAggregationInput>;
export const TaskEventOrderByWithAggregationInputObjectZodSchema = makeSchema();
