import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { TaskUpdateOneRequiredWithoutEventsNestedInputObjectSchema as TaskUpdateOneRequiredWithoutEventsNestedInputObjectSchema } from './TaskUpdateOneRequiredWithoutEventsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutEventsNestedInputObjectSchema).optional()
}).strict();
export const TaskEventUpdateWithoutFieldsInputObjectSchema: z.ZodType<Prisma.TaskEventUpdateWithoutFieldsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventUpdateWithoutFieldsInput>;
export const TaskEventUpdateWithoutFieldsInputObjectZodSchema = makeSchema();
