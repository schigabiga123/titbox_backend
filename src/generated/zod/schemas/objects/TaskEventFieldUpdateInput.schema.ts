import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { TaskEventUpdateOneRequiredWithoutFieldsNestedInputObjectSchema as TaskEventUpdateOneRequiredWithoutFieldsNestedInputObjectSchema } from './TaskEventUpdateOneRequiredWithoutFieldsNestedInput.schema';
import { AttachmentUpdateManyWithoutTaskEventFieldNestedInputObjectSchema as AttachmentUpdateManyWithoutTaskEventFieldNestedInputObjectSchema } from './AttachmentUpdateManyWithoutTaskEventFieldNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  data: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  taskEvent: z.lazy(() => TaskEventUpdateOneRequiredWithoutFieldsNestedInputObjectSchema).optional(),
  attachments: z.lazy(() => AttachmentUpdateManyWithoutTaskEventFieldNestedInputObjectSchema).optional()
}).strict();
export const TaskEventFieldUpdateInputObjectSchema: z.ZodType<Prisma.TaskEventFieldUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldUpdateInput>;
export const TaskEventFieldUpdateInputObjectZodSchema = makeSchema();
