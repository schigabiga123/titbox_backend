import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AttachmentTypeSchema } from '../enums/AttachmentType.schema';
import { EnumAttachmentTypeFieldUpdateOperationsInputObjectSchema as EnumAttachmentTypeFieldUpdateOperationsInputObjectSchema } from './EnumAttachmentTypeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { CommentUpdateOneWithoutAttachmentsNestedInputObjectSchema as CommentUpdateOneWithoutAttachmentsNestedInputObjectSchema } from './CommentUpdateOneWithoutAttachmentsNestedInput.schema';
import { TaskEventFieldUpdateOneWithoutAttachmentsNestedInputObjectSchema as TaskEventFieldUpdateOneWithoutAttachmentsNestedInputObjectSchema } from './TaskEventFieldUpdateOneWithoutAttachmentsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([AttachmentTypeSchema, z.lazy(() => EnumAttachmentTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  comment: z.lazy(() => CommentUpdateOneWithoutAttachmentsNestedInputObjectSchema).optional(),
  taskEventField: z.lazy(() => TaskEventFieldUpdateOneWithoutAttachmentsNestedInputObjectSchema).optional()
}).strict();
export const AttachmentUpdateWithoutTaskFieldInputObjectSchema: z.ZodType<Prisma.AttachmentUpdateWithoutTaskFieldInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentUpdateWithoutTaskFieldInput>;
export const AttachmentUpdateWithoutTaskFieldInputObjectZodSchema = makeSchema();
