import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentArgsObjectSchema as CommentArgsObjectSchema } from './CommentArgs.schema'

const makeSchema = () => z.object({
  commentId: z.boolean().optional(),
  userId: z.boolean().optional(),
  comment: z.union([z.boolean(), z.lazy(() => CommentArgsObjectSchema)]).optional()
}).strict();
export const CommentTaggedUserSelectObjectSchema: z.ZodType<Prisma.CommentTaggedUserSelect> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserSelect>;
export const CommentTaggedUserSelectObjectZodSchema = makeSchema();
