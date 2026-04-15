import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TaskFieldCountOrderByAggregateInputObjectSchema as TaskFieldCountOrderByAggregateInputObjectSchema } from './TaskFieldCountOrderByAggregateInput.schema';
import { TaskFieldMaxOrderByAggregateInputObjectSchema as TaskFieldMaxOrderByAggregateInputObjectSchema } from './TaskFieldMaxOrderByAggregateInput.schema';
import { TaskFieldMinOrderByAggregateInputObjectSchema as TaskFieldMinOrderByAggregateInputObjectSchema } from './TaskFieldMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  pocketId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: SortOrderSchema.optional(),
  data: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => TaskFieldCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TaskFieldMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TaskFieldMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TaskFieldOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TaskFieldOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldOrderByWithAggregationInput>;
export const TaskFieldOrderByWithAggregationInputObjectZodSchema = makeSchema();
