import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  userId: z.string()
}).strict();
export const CommentTaggedUserCreateManyCommentInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserCreateManyCommentInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserCreateManyCommentInput>;
export const CommentTaggedUserCreateManyCommentInputObjectZodSchema = makeSchema();
