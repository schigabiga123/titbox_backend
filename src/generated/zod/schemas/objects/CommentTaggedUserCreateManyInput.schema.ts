import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  commentId: z.string(),
  userId: z.string()
}).strict();
export const CommentTaggedUserCreateManyInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserCreateManyInput>;
export const CommentTaggedUserCreateManyInputObjectZodSchema = makeSchema();
