import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  commentId: z.string(),
  userId: z.string()
}).strict();
export const CommentTaggedUserCommentIdUserIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserCommentIdUserIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserCommentIdUserIdCompoundUniqueInput>;
export const CommentTaggedUserCommentIdUserIdCompoundUniqueInputObjectZodSchema = makeSchema();
