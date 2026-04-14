import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentTaggedUserSelectObjectSchema as CommentTaggedUserSelectObjectSchema } from './CommentTaggedUserSelect.schema';
import { CommentTaggedUserIncludeObjectSchema as CommentTaggedUserIncludeObjectSchema } from './CommentTaggedUserInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CommentTaggedUserSelectObjectSchema).optional(),
  include: z.lazy(() => CommentTaggedUserIncludeObjectSchema).optional()
}).strict();
export const CommentTaggedUserArgsObjectSchema = makeSchema();
export const CommentTaggedUserArgsObjectZodSchema = makeSchema();
