import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  userId: z.string()
}).strict();
export const CommentTaggedUserCreateWithoutCommentInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserCreateWithoutCommentInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserCreateWithoutCommentInput>;
export const CommentTaggedUserCreateWithoutCommentInputObjectZodSchema = makeSchema();
