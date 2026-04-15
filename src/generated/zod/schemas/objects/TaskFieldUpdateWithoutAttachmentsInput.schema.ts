import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { TaskUpdateOneRequiredWithoutFieldsNestedInputObjectSchema as TaskUpdateOneRequiredWithoutFieldsNestedInputObjectSchema } from './TaskUpdateOneRequiredWithoutFieldsNestedInput.schema';
import { LibraUpdateOneWithoutTaskFieldNestedInputObjectSchema as LibraUpdateOneWithoutTaskFieldNestedInputObjectSchema } from './LibraUpdateOneWithoutTaskFieldNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  pocketId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  data: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutFieldsNestedInputObjectSchema).optional(),
  libra: z.lazy(() => LibraUpdateOneWithoutTaskFieldNestedInputObjectSchema).optional()
}).strict();
export const TaskFieldUpdateWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.TaskFieldUpdateWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldUpdateWithoutAttachmentsInput>;
export const TaskFieldUpdateWithoutAttachmentsInputObjectZodSchema = makeSchema();
