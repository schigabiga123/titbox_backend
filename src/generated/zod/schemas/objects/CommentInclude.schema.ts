import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskArgsObjectSchema as TaskArgsObjectSchema } from './TaskArgs.schema';
import { CommentTaggedUserFindManySchema as CommentTaggedUserFindManySchema } from '../findManyCommentTaggedUser.schema';
import { AttachmentFindManySchema as AttachmentFindManySchema } from '../findManyAttachment.schema';
import { CommentCountOutputTypeArgsObjectSchema as CommentCountOutputTypeArgsObjectSchema } from './CommentCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  task: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional(),
  taggedUsers: z.union([z.boolean(), z.lazy(() => CommentTaggedUserFindManySchema)]).optional(),
  attachments: z.union([z.boolean(), z.lazy(() => AttachmentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CommentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CommentIncludeObjectSchema: z.ZodType<Prisma.CommentInclude> = makeSchema() as unknown as z.ZodType<Prisma.CommentInclude>;
export const CommentIncludeObjectZodSchema = makeSchema();
