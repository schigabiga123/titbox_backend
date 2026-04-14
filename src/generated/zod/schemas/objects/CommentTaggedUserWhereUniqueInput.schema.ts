import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentTaggedUserCommentIdUserIdCompoundUniqueInputObjectSchema as CommentTaggedUserCommentIdUserIdCompoundUniqueInputObjectSchema } from './CommentTaggedUserCommentIdUserIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  commentId_userId: z.lazy(() => CommentTaggedUserCommentIdUserIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const CommentTaggedUserWhereUniqueInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserWhereUniqueInput>;
export const CommentTaggedUserWhereUniqueInputObjectZodSchema = makeSchema();
