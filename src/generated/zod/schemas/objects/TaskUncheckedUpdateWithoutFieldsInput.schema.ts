import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { CommentUncheckedUpdateManyWithoutTaskNestedInputObjectSchema as CommentUncheckedUpdateManyWithoutTaskNestedInputObjectSchema } from './CommentUncheckedUpdateManyWithoutTaskNestedInput.schema';
import { InspectionUncheckedUpdateManyWithoutTaskNestedInputObjectSchema as InspectionUncheckedUpdateManyWithoutTaskNestedInputObjectSchema } from './InspectionUncheckedUpdateManyWithoutTaskNestedInput.schema';
import { PortaChecklistUncheckedUpdateOneWithoutTaskNestedInputObjectSchema as PortaChecklistUncheckedUpdateOneWithoutTaskNestedInputObjectSchema } from './PortaChecklistUncheckedUpdateOneWithoutTaskNestedInput.schema';
import { LibraUncheckedUpdateOneWithoutTaskNestedInputObjectSchema as LibraUncheckedUpdateOneWithoutTaskNestedInputObjectSchema } from './LibraUncheckedUpdateOneWithoutTaskNestedInput.schema';
import { TaskEventUncheckedUpdateManyWithoutTaskNestedInputObjectSchema as TaskEventUncheckedUpdateManyWithoutTaskNestedInputObjectSchema } from './TaskEventUncheckedUpdateManyWithoutTaskNestedInput.schema';
import { StartDeadlineReminderLogUncheckedUpdateManyWithoutTaskNestedInputObjectSchema as StartDeadlineReminderLogUncheckedUpdateManyWithoutTaskNestedInputObjectSchema } from './StartDeadlineReminderLogUncheckedUpdateManyWithoutTaskNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  groupId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  projectId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  desc: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deadline: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  startReminderSentAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  fullAddress: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lat: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lng: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isPickUp: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  accepted: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  hanging: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  parkingSpot: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  assignedUserId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  assignedUserId2: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  submittedUserId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutTaskNestedInputObjectSchema).optional(),
  inspections: z.lazy(() => InspectionUncheckedUpdateManyWithoutTaskNestedInputObjectSchema).optional(),
  portaChecklist: z.lazy(() => PortaChecklistUncheckedUpdateOneWithoutTaskNestedInputObjectSchema).optional(),
  libra: z.lazy(() => LibraUncheckedUpdateOneWithoutTaskNestedInputObjectSchema).optional(),
  events: z.lazy(() => TaskEventUncheckedUpdateManyWithoutTaskNestedInputObjectSchema).optional(),
  startDeadlineReminderLogs: z.lazy(() => StartDeadlineReminderLogUncheckedUpdateManyWithoutTaskNestedInputObjectSchema).optional()
}).strict();
export const TaskUncheckedUpdateWithoutFieldsInputObjectSchema: z.ZodType<Prisma.TaskUncheckedUpdateWithoutFieldsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUncheckedUpdateWithoutFieldsInput>;
export const TaskUncheckedUpdateWithoutFieldsInputObjectZodSchema = makeSchema();
