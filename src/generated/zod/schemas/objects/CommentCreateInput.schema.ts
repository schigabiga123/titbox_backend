import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateNestedOneWithoutCommentsInputObjectSchema as TaskCreateNestedOneWithoutCommentsInputObjectSchema } from './TaskCreateNestedOneWithoutCommentsInput.schema';
import { CommentTaggedUserCreateNestedManyWithoutCommentInputObjectSchema as CommentTaggedUserCreateNestedManyWithoutCommentInputObjectSchema } from './CommentTaggedUserCreateNestedManyWithoutCommentInput.schema';
import { AttachmentCreateNestedManyWithoutCommentInputObjectSchema as AttachmentCreateNestedManyWithoutCommentInputObjectSchema } from './AttachmentCreateNestedManyWithoutCommentInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  submittedUserId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutCommentsInputObjectSchema),
  taggedUsers: z.lazy(() => CommentTaggedUserCreateNestedManyWithoutCommentInputObjectSchema),
  attachments: z.lazy(() => AttachmentCreateNestedManyWithoutCommentInputObjectSchema)
}).strict();
export const CommentCreateInputObjectSchema: z.ZodType<Prisma.CommentCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateInput>;
export const CommentCreateInputObjectZodSchema = makeSchema();
