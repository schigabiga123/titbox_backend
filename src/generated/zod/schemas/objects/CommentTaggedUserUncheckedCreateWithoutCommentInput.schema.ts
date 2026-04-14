import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  userId: z.string()
}).strict();
export const CommentTaggedUserUncheckedCreateWithoutCommentInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserUncheckedCreateWithoutCommentInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserUncheckedCreateWithoutCommentInput>;
export const CommentTaggedUserUncheckedCreateWithoutCommentInputObjectZodSchema = makeSchema();
