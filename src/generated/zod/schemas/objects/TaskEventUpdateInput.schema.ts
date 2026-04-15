import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { TaskUpdateOneRequiredWithoutEventsNestedInputObjectSchema as TaskUpdateOneRequiredWithoutEventsNestedInputObjectSchema } from './TaskUpdateOneRequiredWithoutEventsNestedInput.schema';
import { TaskEventFieldUpdateManyWithoutTaskEventNestedInputObjectSchema as TaskEventFieldUpdateManyWithoutTaskEventNestedInputObjectSchema } from './TaskEventFieldUpdateManyWithoutTaskEventNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutEventsNestedInputObjectSchema).optional(),
  fields: z.lazy(() => TaskEventFieldUpdateManyWithoutTaskEventNestedInputObjectSchema).optional()
}).strict();
export const TaskEventUpdateInputObjectSchema: z.ZodType<Prisma.TaskEventUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventUpdateInput>;
export const TaskEventUpdateInputObjectZodSchema = makeSchema();
