import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  commentId: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const CommentTaggedUserMaxAggregateInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserMaxAggregateInputType>;
export const CommentTaggedUserMaxAggregateInputObjectZodSchema = makeSchema();
