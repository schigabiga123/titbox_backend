import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentUncheckedCreateNestedManyWithoutTaskInputObjectSchema as CommentUncheckedCreateNestedManyWithoutTaskInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutTaskInput.schema';
import { TaskFieldUncheckedCreateNestedManyWithoutTaskInputObjectSchema as TaskFieldUncheckedCreateNestedManyWithoutTaskInputObjectSchema } from './TaskFieldUncheckedCreateNestedManyWithoutTaskInput.schema';
import { InspectionUncheckedCreateNestedManyWithoutTaskInputObjectSchema as InspectionUncheckedCreateNestedManyWithoutTaskInputObjectSchema } from './InspectionUncheckedCreateNestedManyWithoutTaskInput.schema';
import { PortaChecklistUncheckedCreateNestedOneWithoutTaskInputObjectSchema as PortaChecklistUncheckedCreateNestedOneWithoutTaskInputObjectSchema } from './PortaChecklistUncheckedCreateNestedOneWithoutTaskInput.schema';
import { LibraUncheckedCreateNestedOneWithoutTaskInputObjectSchema as LibraUncheckedCreateNestedOneWithoutTaskInputObjectSchema } from './LibraUncheckedCreateNestedOneWithoutTaskInput.schema';
import { TaskEventUncheckedCreateNestedManyWithoutTaskInputObjectSchema as TaskEventUncheckedCreateNestedManyWithoutTaskInputObjectSchema } from './TaskEventUncheckedCreateNestedManyWithoutTaskInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  groupId: z.string(),
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
  assignedUserId: z.string().optional().nullable(),
  assignedUserId2: z.string().optional().nullable(),
  submittedUserId: z.string().optional().nullable(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutTaskInputObjectSchema).optional(),
  fields: z.lazy(() => TaskFieldUncheckedCreateNestedManyWithoutTaskInputObjectSchema).optional(),
  inspections: z.lazy(() => InspectionUncheckedCreateNestedManyWithoutTaskInputObjectSchema).optional(),
  portaChecklist: z.lazy(() => PortaChecklistUncheckedCreateNestedOneWithoutTaskInputObjectSchema).optional(),
  libra: z.lazy(() => LibraUncheckedCreateNestedOneWithoutTaskInputObjectSchema).optional(),
  events: z.lazy(() => TaskEventUncheckedCreateNestedManyWithoutTaskInputObjectSchema).optional()
}).strict();
export const TaskUncheckedCreateWithoutProjectInputObjectSchema: z.ZodType<Prisma.TaskUncheckedCreateWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUncheckedCreateWithoutProjectInput>;
export const TaskUncheckedCreateWithoutProjectInputObjectZodSchema = makeSchema();
