import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { LibraUncheckedUpdateOneWithoutTaskFieldNestedInputObjectSchema as LibraUncheckedUpdateOneWithoutTaskFieldNestedInputObjectSchema } from './LibraUncheckedUpdateOneWithoutTaskFieldNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  taskId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  pocketId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  data: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  libra: z.lazy(() => LibraUncheckedUpdateOneWithoutTaskFieldNestedInputObjectSchema).optional()
}).strict();
export const TaskFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.TaskFieldUncheckedUpdateWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldUncheckedUpdateWithoutAttachmentsInput>;
export const TaskFieldUncheckedUpdateWithoutAttachmentsInputObjectZodSchema = makeSchema();
