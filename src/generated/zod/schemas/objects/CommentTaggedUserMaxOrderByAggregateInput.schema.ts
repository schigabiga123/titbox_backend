import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  commentId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const CommentTaggedUserMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserMaxOrderByAggregateInput>;
export const CommentTaggedUserMaxOrderByAggregateInputObjectZodSchema = makeSchema();
