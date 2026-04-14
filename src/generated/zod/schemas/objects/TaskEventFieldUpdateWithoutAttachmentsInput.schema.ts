import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { TaskEventUpdateOneRequiredWithoutFieldsNestedInputObjectSchema as TaskEventUpdateOneRequiredWithoutFieldsNestedInputObjectSchema } from './TaskEventUpdateOneRequiredWithoutFieldsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  data: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  taskEvent: z.lazy(() => TaskEventUpdateOneRequiredWithoutFieldsNestedInputObjectSchema).optional()
}).strict();
export const TaskEventFieldUpdateWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.TaskEventFieldUpdateWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldUpdateWithoutAttachmentsInput>;
export const TaskEventFieldUpdateWithoutAttachmentsInputObjectZodSchema = makeSchema();
