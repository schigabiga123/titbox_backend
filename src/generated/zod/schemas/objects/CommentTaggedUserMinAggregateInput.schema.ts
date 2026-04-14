import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  commentId: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const CommentTaggedUserMinAggregateInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserMinAggregateInputType>;
export const CommentTaggedUserMinAggregateInputObjectZodSchema = makeSchema();
