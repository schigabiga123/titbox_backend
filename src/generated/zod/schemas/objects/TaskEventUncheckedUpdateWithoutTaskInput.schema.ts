import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { TaskEventFieldUncheckedUpdateManyWithoutTaskEventNestedInputObjectSchema as TaskEventFieldUncheckedUpdateManyWithoutTaskEventNestedInputObjectSchema } from './TaskEventFieldUncheckedUpdateManyWithoutTaskEventNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  fields: z.lazy(() => TaskEventFieldUncheckedUpdateManyWithoutTaskEventNestedInputObjectSchema).optional()
}).strict();
export const TaskEventUncheckedUpdateWithoutTaskInputObjectSchema: z.ZodType<Prisma.TaskEventUncheckedUpdateWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventUncheckedUpdateWithoutTaskInput>;
export const TaskEventUncheckedUpdateWithoutTaskInputObjectZodSchema = makeSchema();
