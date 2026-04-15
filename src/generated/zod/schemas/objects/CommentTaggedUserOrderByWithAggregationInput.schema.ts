import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CommentTaggedUserCountOrderByAggregateInputObjectSchema as CommentTaggedUserCountOrderByAggregateInputObjectSchema } from './CommentTaggedUserCountOrderByAggregateInput.schema';
import { CommentTaggedUserMaxOrderByAggregateInputObjectSchema as CommentTaggedUserMaxOrderByAggregateInputObjectSchema } from './CommentTaggedUserMaxOrderByAggregateInput.schema';
import { CommentTaggedUserMinOrderByAggregateInputObjectSchema as CommentTaggedUserMinOrderByAggregateInputObjectSchema } from './CommentTaggedUserMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  commentId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  _count: z.lazy(() => CommentTaggedUserCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CommentTaggedUserMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CommentTaggedUserMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CommentTaggedUserOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserOrderByWithAggregationInput>;
export const CommentTaggedUserOrderByWithAggregationInputObjectZodSchema = makeSchema();
