import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  commentId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CommentTaggedUserCountAggregateInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserCountAggregateInputType>;
export const CommentTaggedUserCountAggregateInputObjectZodSchema = makeSchema();
