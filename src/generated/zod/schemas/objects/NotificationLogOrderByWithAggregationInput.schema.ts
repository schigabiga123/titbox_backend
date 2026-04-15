import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { NotificationLogCountOrderByAggregateInputObjectSchema as NotificationLogCountOrderByAggregateInputObjectSchema } from './NotificationLogCountOrderByAggregateInput.schema';
import { NotificationLogMaxOrderByAggregateInputObjectSchema as NotificationLogMaxOrderByAggregateInputObjectSchema } from './NotificationLogMaxOrderByAggregateInput.schema';
import { NotificationLogMinOrderByAggregateInputObjectSchema as NotificationLogMinOrderByAggregateInputObjectSchema } from './NotificationLogMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  notification: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  subTaskId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  commentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  finished: SortOrderSchema.optional(),
  deadline: SortOrderSchema.optional(),
  _count: z.lazy(() => NotificationLogCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => NotificationLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => NotificationLogMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const NotificationLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.NotificationLogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationLogOrderByWithAggregationInput>;
export const NotificationLogOrderByWithAggregationInputObjectZodSchema = makeSchema();
