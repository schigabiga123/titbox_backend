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
export const AttachmentCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AttachmentCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentCountOrderByAggregateInput>;
export const AttachmentCountOrderByAggregateInputObjectZodSchema = makeSchema();
