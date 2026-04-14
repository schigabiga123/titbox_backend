import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentUncheckedCreateNestedManyWithoutCommentInputObjectSchema as AttachmentUncheckedCreateNestedManyWithoutCommentInputObjectSchema } from './AttachmentUncheckedCreateNestedManyWithoutCommentInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  taskId: z.string(),
  text: z.string(),
  submittedUserId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable(),
  attachments: z.lazy(() => AttachmentUncheckedCreateNestedManyWithoutCommentInputObjectSchema).optional()
}).strict();
export const CommentUncheckedCreateWithoutTaggedUsersInputObjectSchema: z.ZodType<Prisma.CommentUncheckedCreateWithoutTaggedUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUncheckedCreateWithoutTaggedUsersInput>;
export const CommentUncheckedCreateWithoutTaggedUsersInputObjectZodSchema = makeSchema();
