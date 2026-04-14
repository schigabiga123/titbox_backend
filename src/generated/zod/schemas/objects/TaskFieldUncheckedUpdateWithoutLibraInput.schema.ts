import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { AttachmentUncheckedUpdateManyWithoutTaskFieldNestedInputObjectSchema as AttachmentUncheckedUpdateManyWithoutTaskFieldNestedInputObjectSchema } from './AttachmentUncheckedUpdateManyWithoutTaskFieldNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  taskId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  pocketId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  data: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  attachments: z.lazy(() => AttachmentUncheckedUpdateManyWithoutTaskFieldNestedInputObjectSchema).optional()
}).strict();
export const TaskFieldUncheckedUpdateWithoutLibraInputObjectSchema: z.ZodType<Prisma.TaskFieldUncheckedUpdateWithoutLibraInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldUncheckedUpdateWithoutLibraInput>;
export const TaskFieldUncheckedUpdateWithoutLibraInputObjectZodSchema = makeSchema();
