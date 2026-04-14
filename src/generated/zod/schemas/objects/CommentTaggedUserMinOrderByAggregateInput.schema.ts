import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  commentId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const CommentTaggedUserMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserMinOrderByAggregateInput>;
export const CommentTaggedUserMinOrderByAggregateInputObjectZodSchema = makeSchema();
