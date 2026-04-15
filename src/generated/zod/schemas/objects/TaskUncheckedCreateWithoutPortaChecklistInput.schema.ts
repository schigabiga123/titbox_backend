import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentUncheckedCreateNestedManyWithoutTaskInputObjectSchema as CommentUncheckedCreateNestedManyWithoutTaskInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutTaskInput.schema';
import { TaskFieldUncheckedCreateNestedManyWithoutTaskInputObjectSchema as TaskFieldUncheckedCreateNestedManyWithoutTaskInputObjectSchema } from './TaskFieldUncheckedCreateNestedManyWithoutTaskInput.schema';
import { InspectionUncheckedCreateNestedManyWithoutTaskInputObjectSchema as InspectionUncheckedCreateNestedManyWithoutTaskInputObjectSchema } from './InspectionUncheckedCreateNestedManyWithoutTaskInput.schema';
import { LibraUncheckedCreateNestedOneWithoutTaskInputObjectSchema as LibraUncheckedCreateNestedOneWithoutTaskInputObjectSchema } from './LibraUncheckedCreateNestedOneWithoutTaskInput.schema';
import { TaskEventUncheckedCreateNestedManyWithoutTaskInputObjectSchema as TaskEventUncheckedCreateNestedManyWithoutTaskInputObjectSchema } from './TaskEventUncheckedCreateNestedManyWithoutTaskInput.schema';
import { StartDeadlineReminderLogUncheckedCreateNestedManyWithoutTaskInputObjectSchema as StartDeadlineReminderLogUncheckedCreateNestedManyWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogUncheckedCreateNestedManyWithoutTaskInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  groupId: z.string(),
  projectId: z.string(),
  title: z.string(),
  desc: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  deadline: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable(),
  startReminderSentAt: z.coerce.date().optional().nullable(),
  fullAddress: z.string().optional().nullable(),
  lat: z.number().optional().nullable(),
  lng: z.number().optional().nullable(),
  isPickUp: z.boolean().optional().nullable(),
  accepted: z.boolean().optional().nullable(),
  hanging: z.boolean().optional().nullable(),
  parkingSpot: z.string().optional().nullable(),
  assignedUserId: z.string().optional().nullable(),
  assignedUserId2: z.string().optional().nullable(),
  submittedUserId: z.string().optional().nullable(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutTaskInputObjectSchema).optional(),
  fields: z.lazy(() => TaskFieldUncheckedCreateNestedManyWithoutTaskInputObjectSchema).optional(),
  inspections: z.lazy(() => InspectionUncheckedCreateNestedManyWithoutTaskInputObjectSchema).optional(),
  libra: z.lazy(() => LibraUncheckedCreateNestedOneWithoutTaskInputObjectSchema).optional(),
  events: z.lazy(() => TaskEventUncheckedCreateNestedManyWithoutTaskInputObjectSchema).optional(),
  startDeadlineReminderLogs: z.lazy(() => StartDeadlineReminderLogUncheckedCreateNestedManyWithoutTaskInputObjectSchema).optional()
}).strict();
export const TaskUncheckedCreateWithoutPortaChecklistInputObjectSchema: z.ZodType<Prisma.TaskUncheckedCreateWithoutPortaChecklistInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUncheckedCreateWithoutPortaChecklistInput>;
export const TaskUncheckedCreateWithoutPortaChecklistInputObjectZodSchema = makeSchema();
