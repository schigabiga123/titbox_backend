import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentTaggedUserUncheckedCreateNestedManyWithoutCommentInputObjectSchema as CommentTaggedUserUncheckedCreateNestedManyWithoutCommentInputObjectSchema } from './CommentTaggedUserUncheckedCreateNestedManyWithoutCommentInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  taskId: z.string(),
  text: z.string(),
  submittedUserId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable(),
  taggedUsers: z.lazy(() => CommentTaggedUserUncheckedCreateNestedManyWithoutCommentInputObjectSchema).optional()
}).strict();
export const CommentUncheckedCreateWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.CommentUncheckedCreateWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUncheckedCreateWithoutAttachmentsInput>;
export const CommentUncheckedCreateWithoutAttachmentsInputObjectZodSchema = makeSchema();
