import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  submittedUserId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const CommentMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CommentMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentMaxOrderByAggregateInput>;
export const CommentMaxOrderByAggregateInputObjectZodSchema = makeSchema();
