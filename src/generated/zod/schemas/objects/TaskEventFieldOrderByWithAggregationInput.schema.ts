import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TaskEventFieldCountOrderByAggregateInputObjectSchema as TaskEventFieldCountOrderByAggregateInputObjectSchema } from './TaskEventFieldCountOrderByAggregateInput.schema';
import { TaskEventFieldMaxOrderByAggregateInputObjectSchema as TaskEventFieldMaxOrderByAggregateInputObjectSchema } from './TaskEventFieldMaxOrderByAggregateInput.schema';
import { TaskEventFieldMinOrderByAggregateInputObjectSchema as TaskEventFieldMinOrderByAggregateInputObjectSchema } from './TaskEventFieldMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  taskEventId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  data: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => TaskEventFieldCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TaskEventFieldMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TaskEventFieldMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TaskEventFieldOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TaskEventFieldOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldOrderByWithAggregationInput>;
export const TaskEventFieldOrderByWithAggregationInputObjectZodSchema = makeSchema();
