import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AttachmentTypeSchema } from '../enums/AttachmentType.schema';
import { EnumAttachmentTypeFieldUpdateOperationsInputObjectSchema as EnumAttachmentTypeFieldUpdateOperationsInputObjectSchema } from './EnumAttachmentTypeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { CommentUpdateOneWithoutAttachmentsNestedInputObjectSchema as CommentUpdateOneWithoutAttachmentsNestedInputObjectSchema } from './CommentUpdateOneWithoutAttachmentsNestedInput.schema';
import { TaskFieldUpdateOneWithoutAttachmentsNestedInputObjectSchema as TaskFieldUpdateOneWithoutAttachmentsNestedInputObjectSchema } from './TaskFieldUpdateOneWithoutAttachmentsNestedInput.schema';
import { TaskEventFieldUpdateOneWithoutAttachmentsNestedInputObjectSchema as TaskEventFieldUpdateOneWithoutAttachmentsNestedInputObjectSchema } from './TaskEventFieldUpdateOneWithoutAttachmentsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([AttachmentTypeSchema, z.lazy(() => EnumAttachmentTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  comment: z.lazy(() => CommentUpdateOneWithoutAttachmentsNestedInputObjectSchema).optional(),
  taskField: z.lazy(() => TaskFieldUpdateOneWithoutAttachmentsNestedInputObjectSchema).optional(),
  taskEventField: z.lazy(() => TaskEventFieldUpdateOneWithoutAttachmentsNestedInputObjectSchema).optional()
}).strict();
export const AttachmentUpdateInputObjectSchema: z.ZodType<Prisma.AttachmentUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentUpdateInput>;
export const AttachmentUpdateInputObjectZodSchema = makeSchema();
