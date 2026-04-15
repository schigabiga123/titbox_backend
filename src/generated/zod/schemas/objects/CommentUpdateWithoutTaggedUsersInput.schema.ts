import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { TaskUpdateOneRequiredWithoutCommentsNestedInputObjectSchema as TaskUpdateOneRequiredWithoutCommentsNestedInputObjectSchema } from './TaskUpdateOneRequiredWithoutCommentsNestedInput.schema';
import { AttachmentUpdateManyWithoutCommentNestedInputObjectSchema as AttachmentUpdateManyWithoutCommentNestedInputObjectSchema } from './AttachmentUpdateManyWithoutCommentNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  submittedUserId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutCommentsNestedInputObjectSchema).optional(),
  attachments: z.lazy(() => AttachmentUpdateManyWithoutCommentNestedInputObjectSchema).optional()
}).strict();
export const CommentUpdateWithoutTaggedUsersInputObjectSchema: z.ZodType<Prisma.CommentUpdateWithoutTaggedUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpdateWithoutTaggedUsersInput>;
export const CommentUpdateWithoutTaggedUsersInputObjectZodSchema = makeSchema();
