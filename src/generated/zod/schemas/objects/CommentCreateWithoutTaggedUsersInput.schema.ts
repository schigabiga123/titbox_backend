import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateNestedOneWithoutCommentsInputObjectSchema as TaskCreateNestedOneWithoutCommentsInputObjectSchema } from './TaskCreateNestedOneWithoutCommentsInput.schema';
import { AttachmentCreateNestedManyWithoutCommentInputObjectSchema as AttachmentCreateNestedManyWithoutCommentInputObjectSchema } from './AttachmentCreateNestedManyWithoutCommentInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  submittedUserId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutCommentsInputObjectSchema),
  attachments: z.lazy(() => AttachmentCreateNestedManyWithoutCommentInputObjectSchema).optional()
}).strict();
export const CommentCreateWithoutTaggedUsersInputObjectSchema: z.ZodType<Prisma.CommentCreateWithoutTaggedUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateWithoutTaggedUsersInput>;
export const CommentCreateWithoutTaggedUsersInputObjectZodSchema = makeSchema();
