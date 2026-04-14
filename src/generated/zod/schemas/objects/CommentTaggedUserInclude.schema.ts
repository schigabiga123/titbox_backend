import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentArgsObjectSchema as CommentArgsObjectSchema } from './CommentArgs.schema'

const makeSchema = () => z.object({
  comment: z.union([z.boolean(), z.lazy(() => CommentArgsObjectSchema)]).optional()
}).strict();
export const CommentTaggedUserIncludeObjectSchema: z.ZodType<Prisma.CommentTaggedUserInclude> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserInclude>;
export const CommentTaggedUserIncludeObjectZodSchema = makeSchema();
