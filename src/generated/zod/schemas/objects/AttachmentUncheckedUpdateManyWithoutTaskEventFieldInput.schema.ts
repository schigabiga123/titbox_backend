import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AttachmentTypeSchema } from '../enums/AttachmentType.schema';
import { EnumAttachmentTypeFieldUpdateOperationsInputObjectSchema as EnumAttachmentTypeFieldUpdateOperationsInputObjectSchema } from './EnumAttachmentTypeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([AttachmentTypeSchema, z.lazy(() => EnumAttachmentTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  commentId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  taskFieldId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const AttachmentUncheckedUpdateManyWithoutTaskEventFieldInputObjectSchema: z.ZodType<Prisma.AttachmentUncheckedUpdateManyWithoutTaskEventFieldInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentUncheckedUpdateManyWithoutTaskEventFieldInput>;
export const AttachmentUncheckedUpdateManyWithoutTaskEventFieldInputObjectZodSchema = makeSchema();
