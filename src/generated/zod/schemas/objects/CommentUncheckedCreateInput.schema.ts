import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentTaggedUserUncheckedCreateNestedManyWithoutCommentInputObjectSchema as CommentTaggedUserUncheckedCreateNestedManyWithoutCommentInputObjectSchema } from './CommentTaggedUserUncheckedCreateNestedManyWithoutCommentInput.schema';
import { AttachmentUncheckedCreateNestedManyWithoutCommentInputObjectSchema as AttachmentUncheckedCreateNestedManyWithoutCommentInputObjectSchema } from './AttachmentUncheckedCreateNestedManyWithoutCommentInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  taskId: z.string(),
  text: z.string(),
  submittedUserId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable(),
  taggedUsers: z.lazy(() => CommentTaggedUserUncheckedCreateNestedManyWithoutCommentInputObjectSchema),
  attachments: z.lazy(() => AttachmentUncheckedCreateNestedManyWithoutCommentInputObjectSchema)
}).strict();
export const CommentUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CommentUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUncheckedCreateInput>;
export const CommentUncheckedCreateInputObjectZodSchema = makeSchema();
