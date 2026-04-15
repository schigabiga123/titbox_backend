import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CommentOrderByWithRelationInputObjectSchema as CommentOrderByWithRelationInputObjectSchema } from './CommentOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  commentId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  comment: z.lazy(() => CommentOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CommentTaggedUserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserOrderByWithRelationInput>;
export const CommentTaggedUserOrderByWithRelationInputObjectZodSchema = makeSchema();
