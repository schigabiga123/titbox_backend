import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  taskId: z.literal(true).optional(),
  text: z.literal(true).optional(),
  submittedUserId: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const CommentMinAggregateInputObjectSchema: z.ZodType<Prisma.CommentMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CommentMinAggregateInputType>;
export const CommentMinAggregateInputObjectZodSchema = makeSchema();
