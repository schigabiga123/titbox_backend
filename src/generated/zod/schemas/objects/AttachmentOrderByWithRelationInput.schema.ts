import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CommentOrderByWithRelationInputObjectSchema as CommentOrderByWithRelationInputObjectSchema } from './CommentOrderByWithRelationInput.schema';
import { TaskFieldOrderByWithRelationInputObjectSchema as TaskFieldOrderByWithRelationInputObjectSchema } from './TaskFieldOrderByWithRelationInput.schema';
import { TaskEventFieldOrderByWithRelationInputObjectSchema as TaskEventFieldOrderByWithRelationInputObjectSchema } from './TaskEventFieldOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  commentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  taskFieldId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  taskEventFieldId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  comment: z.lazy(() => CommentOrderByWithRelationInputObjectSchema).optional(),
  taskField: z.lazy(() => TaskFieldOrderByWithRelationInputObjectSchema).optional(),
  taskEventField: z.lazy(() => TaskEventFieldOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AttachmentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AttachmentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentOrderByWithRelationInput>;
export const AttachmentOrderByWithRelationInputObjectZodSchema = makeSchema();
