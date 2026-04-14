import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  commentId: z.string(),
  userId: z.string()
}).strict();
export const CommentTaggedUserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserUncheckedCreateInput>;
export const CommentTaggedUserUncheckedCreateInputObjectZodSchema = makeSchema();
