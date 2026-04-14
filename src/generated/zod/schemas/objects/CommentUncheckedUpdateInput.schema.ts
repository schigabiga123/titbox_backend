import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { CommentTaggedUserUncheckedUpdateManyWithoutCommentNestedInputObjectSchema as CommentTaggedUserUncheckedUpdateManyWithoutCommentNestedInputObjectSchema } from './CommentTaggedUserUncheckedUpdateManyWithoutCommentNestedInput.schema';
import { AttachmentUncheckedUpdateManyWithoutCommentNestedInputObjectSchema as AttachmentUncheckedUpdateManyWithoutCommentNestedInputObjectSchema } from './AttachmentUncheckedUpdateManyWithoutCommentNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  taskId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  submittedUserId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  taggedUsers: z.lazy(() => CommentTaggedUserUncheckedUpdateManyWithoutCommentNestedInputObjectSchema).optional(),
  attachments: z.lazy(() => AttachmentUncheckedUpdateManyWithoutCommentNestedInputObjectSchema).optional()
}).strict();
export const CommentUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CommentUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUncheckedUpdateInput>;
export const CommentUncheckedUpdateInputObjectZodSchema = makeSchema();
