import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentTaggedUserUncheckedCreateNestedManyWithoutCommentInputObjectSchema as CommentTaggedUserUncheckedCreateNestedManyWithoutCommentInputObjectSchema } from './CommentTaggedUserUncheckedCreateNestedManyWithoutCommentInput.schema';
import { AttachmentUncheckedCreateNestedManyWithoutCommentInputObjectSchema as AttachmentUncheckedCreateNestedManyWithoutCommentInputObjectSchema } from './AttachmentUncheckedCreateNestedManyWithoutCommentInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  submittedUserId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable(),
  taggedUsers: z.lazy(() => CommentTaggedUserUncheckedCreateNestedManyWithoutCommentInputObjectSchema).optional(),
  attachments: z.lazy(() => AttachmentUncheckedCreateNestedManyWithoutCommentInputObjectSchema).optional()
}).strict();
export const CommentUncheckedCreateWithoutTaskInputObjectSchema: z.ZodType<Prisma.CommentUncheckedCreateWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUncheckedCreateWithoutTaskInput>;
export const CommentUncheckedCreateWithoutTaskInputObjectZodSchema = makeSchema();
