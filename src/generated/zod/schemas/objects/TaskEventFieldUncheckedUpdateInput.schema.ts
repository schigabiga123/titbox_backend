import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { AttachmentUncheckedUpdateManyWithoutTaskEventFieldNestedInputObjectSchema as AttachmentUncheckedUpdateManyWithoutTaskEventFieldNestedInputObjectSchema } from './AttachmentUncheckedUpdateManyWithoutTaskEventFieldNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  taskEventId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  data: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  attachments: z.lazy(() => AttachmentUncheckedUpdateManyWithoutTaskEventFieldNestedInputObjectSchema).optional()
}).strict();
export const TaskEventFieldUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.TaskEventFieldUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldUncheckedUpdateInput>;
export const TaskEventFieldUncheckedUpdateInputObjectZodSchema = makeSchema();
