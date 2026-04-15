import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { AttachmentUpdateManyWithoutTaskFieldNestedInputObjectSchema as AttachmentUpdateManyWithoutTaskFieldNestedInputObjectSchema } from './AttachmentUpdateManyWithoutTaskFieldNestedInput.schema';
import { LibraUpdateOneWithoutTaskFieldNestedInputObjectSchema as LibraUpdateOneWithoutTaskFieldNestedInputObjectSchema } from './LibraUpdateOneWithoutTaskFieldNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  pocketId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  data: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  attachments: z.lazy(() => AttachmentUpdateManyWithoutTaskFieldNestedInputObjectSchema).optional(),
  libra: z.lazy(() => LibraUpdateOneWithoutTaskFieldNestedInputObjectSchema).optional()
}).strict();
export const TaskFieldUpdateWithoutTaskInputObjectSchema: z.ZodType<Prisma.TaskFieldUpdateWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldUpdateWithoutTaskInput>;
export const TaskFieldUpdateWithoutTaskInputObjectZodSchema = makeSchema();
