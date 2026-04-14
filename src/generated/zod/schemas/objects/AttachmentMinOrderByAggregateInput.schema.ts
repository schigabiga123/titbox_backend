import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  commentId: SortOrderSchema.optional(),
  taskFieldId: SortOrderSchema.optional(),
  taskEventFieldId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const AttachmentMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AttachmentMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentMinOrderByAggregateInput>;
export const AttachmentMinOrderByAggregateInputObjectZodSchema = makeSchema();
