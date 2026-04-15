import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { CommentScalarRelationFilterObjectSchema as CommentScalarRelationFilterObjectSchema } from './CommentScalarRelationFilter.schema';
import { CommentWhereInputObjectSchema as CommentWhereInputObjectSchema } from './CommentWhereInput.schema'

const commenttaggeduserwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CommentTaggedUserWhereInputObjectSchema), z.lazy(() => CommentTaggedUserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CommentTaggedUserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CommentTaggedUserWhereInputObjectSchema), z.lazy(() => CommentTaggedUserWhereInputObjectSchema).array()]).optional(),
  commentId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  comment: z.union([z.lazy(() => CommentScalarRelationFilterObjectSchema), z.lazy(() => CommentWhereInputObjectSchema)]).optional()
}).strict();
export const CommentTaggedUserWhereInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserWhereInput> = commenttaggeduserwhereinputSchema as unknown as z.ZodType<Prisma.CommentTaggedUserWhereInput>;
export const CommentTaggedUserWhereInputObjectZodSchema = commenttaggeduserwhereinputSchema;
