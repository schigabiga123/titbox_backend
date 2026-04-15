import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  notification: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  subTaskId: SortOrderSchema.optional(),
  commentId: SortOrderSchema.optional(),
  finished: SortOrderSchema.optional(),
  deadline: SortOrderSchema.optional()
}).strict();
export const NotificationLogCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NotificationLogCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationLogCountOrderByAggregateInput>;
export const NotificationLogCountOrderByAggregateInputObjectZodSchema = makeSchema();
