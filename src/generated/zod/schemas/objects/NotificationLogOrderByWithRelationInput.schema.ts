import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  notification: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  subTaskId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  commentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  finished: SortOrderSchema.optional(),
  deadline: SortOrderSchema.optional()
}).strict();
export const NotificationLogOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.NotificationLogOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationLogOrderByWithRelationInput>;
export const NotificationLogOrderByWithRelationInputObjectZodSchema = makeSchema();
