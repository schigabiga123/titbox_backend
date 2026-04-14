import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const commenttaggeduserscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CommentTaggedUserScalarWhereInputObjectSchema), z.lazy(() => CommentTaggedUserScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CommentTaggedUserScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CommentTaggedUserScalarWhereInputObjectSchema), z.lazy(() => CommentTaggedUserScalarWhereInputObjectSchema).array()]).optional(),
  commentId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const CommentTaggedUserScalarWhereInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserScalarWhereInput> = commenttaggeduserscalarwhereinputSchema as unknown as z.ZodType<Prisma.CommentTaggedUserScalarWhereInput>;
export const CommentTaggedUserScalarWhereInputObjectZodSchema = commenttaggeduserscalarwhereinputSchema;
