import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateNestedOneWithoutTasksInputObjectSchema as ProjectCreateNestedOneWithoutTasksInputObjectSchema } from './ProjectCreateNestedOneWithoutTasksInput.schema';
import { CommentCreateNestedManyWithoutTaskInputObjectSchema as CommentCreateNestedManyWithoutTaskInputObjectSchema } from './CommentCreateNestedManyWithoutTaskInput.schema';
import { TaskFieldCreateNestedManyWithoutTaskInputObjectSchema as TaskFieldCreateNestedManyWithoutTaskInputObjectSchema } from './TaskFieldCreateNestedManyWithoutTaskInput.schema';
import { InspectionCreateNestedManyWithoutTaskInputObjectSchema as InspectionCreateNestedManyWithoutTaskInputObjectSchema } from './InspectionCreateNestedManyWithoutTaskInput.schema';
import { PortaChecklistCreateNestedOneWithoutTaskInputObjectSchema as PortaChecklistCreateNestedOneWithoutTaskInputObjectSchema } from './PortaChecklistCreateNestedOneWithoutTaskInput.schema';
import { LibraCreateNestedOneWithoutTaskInputObjectSchema as LibraCreateNestedOneWithoutTaskInputObjectSchema } from './LibraCreateNestedOneWithoutTaskInput.schema';
import { TaskEventCreateNestedManyWithoutTaskInputObjectSchema as TaskEventCreateNestedManyWithoutTaskInputObjectSchema } from './TaskEventCreateNestedManyWithoutTaskInput.schema'

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
  parkingSpot: z.string().optional().nullable(),
  assignedUserId: z.string().optional().nullable(),
  assignedUserId2: z.string().optional().nullable(),
  submittedUserId: z.string().optional().nullable(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutTasksInputObjectSchema),
  comments: z.lazy(() => CommentCreateNestedManyWithoutTaskInputObjectSchema).optional(),
  fields: z.lazy(() => TaskFieldCreateNestedManyWithoutTaskInputObjectSchema).optional(),
  inspections: z.lazy(() => InspectionCreateNestedManyWithoutTaskInputObjectSchema).optional(),
  portaChecklist: z.lazy(() => PortaChecklistCreateNestedOneWithoutTaskInputObjectSchema).optional(),
  libra: z.lazy(() => LibraCreateNestedOneWithoutTaskInputObjectSchema).optional(),
  events: z.lazy(() => TaskEventCreateNestedManyWithoutTaskInputObjectSchema).optional()
}).strict();
export const TaskCreateWithoutStartDeadlineReminderLogsInputObjectSchema: z.ZodType<Prisma.TaskCreateWithoutStartDeadlineReminderLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateWithoutStartDeadlineReminderLogsInput>;
export const TaskCreateWithoutStartDeadlineReminderLogsInputObjectZodSchema = makeSchema();
