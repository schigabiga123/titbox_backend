import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CommentCountOrderByAggregateInputObjectSchema as CommentCountOrderByAggregateInputObjectSchema } from './CommentCountOrderByAggregateInput.schema';
import { CommentMaxOrderByAggregateInputObjectSchema as CommentMaxOrderByAggregateInputObjectSchema } from './CommentMaxOrderByAggregateInput.schema';
import { CommentMinOrderByAggregateInputObjectSchema as CommentMinOrderByAggregateInputObjectSchema } from './CommentMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  submittedUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => CommentCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CommentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CommentMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CommentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CommentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentOrderByWithAggregationInput>;
export const CommentOrderByWithAggregationInputObjectZodSchema = makeSchema();
