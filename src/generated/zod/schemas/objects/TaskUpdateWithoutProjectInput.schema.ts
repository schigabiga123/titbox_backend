import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { CommentUpdateManyWithoutTaskNestedInputObjectSchema as CommentUpdateManyWithoutTaskNestedInputObjectSchema } from './CommentUpdateManyWithoutTaskNestedInput.schema';
import { TaskFieldUpdateManyWithoutTaskNestedInputObjectSchema as TaskFieldUpdateManyWithoutTaskNestedInputObjectSchema } from './TaskFieldUpdateManyWithoutTaskNestedInput.schema';
import { InspectionUpdateManyWithoutTaskNestedInputObjectSchema as InspectionUpdateManyWithoutTaskNestedInputObjectSchema } from './InspectionUpdateManyWithoutTaskNestedInput.schema';
import { PortaChecklistUpdateOneWithoutTaskNestedInputObjectSchema as PortaChecklistUpdateOneWithoutTaskNestedInputObjectSchema } from './PortaChecklistUpdateOneWithoutTaskNestedInput.schema';
import { LibraUpdateOneWithoutTaskNestedInputObjectSchema as LibraUpdateOneWithoutTaskNestedInputObjectSchema } from './LibraUpdateOneWithoutTaskNestedInput.schema';
import { TaskEventUpdateManyWithoutTaskNestedInputObjectSchema as TaskEventUpdateManyWithoutTaskNestedInputObjectSchema } from './TaskEventUpdateManyWithoutTaskNestedInput.schema';
import { StartDeadlineReminderLogUpdateManyWithoutTaskNestedInputObjectSchema as StartDeadlineReminderLogUpdateManyWithoutTaskNestedInputObjectSchema } from './StartDeadlineReminderLogUpdateManyWithoutTaskNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  groupId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
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
  comments: z.lazy(() => CommentUpdateManyWithoutTaskNestedInputObjectSchema).optional(),
  fields: z.lazy(() => TaskFieldUpdateManyWithoutTaskNestedInputObjectSchema).optional(),
  inspections: z.lazy(() => InspectionUpdateManyWithoutTaskNestedInputObjectSchema).optional(),
  portaChecklist: z.lazy(() => PortaChecklistUpdateOneWithoutTaskNestedInputObjectSchema).optional(),
  libra: z.lazy(() => LibraUpdateOneWithoutTaskNestedInputObjectSchema).optional(),
  events: z.lazy(() => TaskEventUpdateManyWithoutTaskNestedInputObjectSchema).optional(),
  startDeadlineReminderLogs: z.lazy(() => StartDeadlineReminderLogUpdateManyWithoutTaskNestedInputObjectSchema).optional()
}).strict();
export const TaskUpdateWithoutProjectInputObjectSchema: z.ZodType<Prisma.TaskUpdateWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateWithoutProjectInput>;
export const TaskUpdateWithoutProjectInputObjectZodSchema = makeSchema();
