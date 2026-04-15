import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AttachmentCountOrderByAggregateInputObjectSchema as AttachmentCountOrderByAggregateInputObjectSchema } from './AttachmentCountOrderByAggregateInput.schema';
import { AttachmentMaxOrderByAggregateInputObjectSchema as AttachmentMaxOrderByAggregateInputObjectSchema } from './AttachmentMaxOrderByAggregateInput.schema';
import { AttachmentMinOrderByAggregateInputObjectSchema as AttachmentMinOrderByAggregateInputObjectSchema } from './AttachmentMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  commentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  taskFieldId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  taskEventFieldId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => AttachmentCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AttachmentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AttachmentMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AttachmentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AttachmentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentOrderByWithAggregationInput>;
export const AttachmentOrderByWithAggregationInputObjectZodSchema = makeSchema();
