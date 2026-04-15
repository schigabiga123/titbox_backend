import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { AttachmentUpdateManyWithoutTaskEventFieldNestedInputObjectSchema as AttachmentUpdateManyWithoutTaskEventFieldNestedInputObjectSchema } from './AttachmentUpdateManyWithoutTaskEventFieldNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  data: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  attachments: z.lazy(() => AttachmentUpdateManyWithoutTaskEventFieldNestedInputObjectSchema).optional()
}).strict();
export const TaskEventFieldUpdateWithoutTaskEventInputObjectSchema: z.ZodType<Prisma.TaskEventFieldUpdateWithoutTaskEventInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldUpdateWithoutTaskEventInput>;
export const TaskEventFieldUpdateWithoutTaskEventInputObjectZodSchema = makeSchema();
