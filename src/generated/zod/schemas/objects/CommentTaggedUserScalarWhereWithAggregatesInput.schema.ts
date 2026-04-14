import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const commenttaggeduserscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CommentTaggedUserScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CommentTaggedUserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CommentTaggedUserScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CommentTaggedUserScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CommentTaggedUserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  commentId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const CommentTaggedUserScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserScalarWhereWithAggregatesInput> = commenttaggeduserscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CommentTaggedUserScalarWhereWithAggregatesInput>;
export const CommentTaggedUserScalarWhereWithAggregatesInputObjectZodSchema = commenttaggeduserscalarwherewithaggregatesinputSchema;
