import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskArgsObjectSchema as TaskArgsObjectSchema } from './TaskArgs.schema';
import { CommentTaggedUserFindManySchema as CommentTaggedUserFindManySchema } from '../findManyCommentTaggedUser.schema';
import { AttachmentFindManySchema as AttachmentFindManySchema } from '../findManyAttachment.schema';
import { CommentCountOutputTypeArgsObjectSchema as CommentCountOutputTypeArgsObjectSchema } from './CommentCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  taskId: z.boolean().optional(),
  text: z.boolean().optional(),
  submittedUserId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  task: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional(),
  taggedUsers: z.union([z.boolean(), z.lazy(() => CommentTaggedUserFindManySchema)]).optional(),
  attachments: z.union([z.boolean(), z.lazy(() => AttachmentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CommentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CommentSelectObjectSchema: z.ZodType<Prisma.CommentSelect> = makeSchema() as unknown as z.ZodType<Prisma.CommentSelect>;
export const CommentSelectObjectZodSchema = makeSchema();
