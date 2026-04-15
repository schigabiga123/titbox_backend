import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema';
import { CommentFindManySchema as CommentFindManySchema } from '../findManyComment.schema';
import { TaskFieldFindManySchema as TaskFieldFindManySchema } from '../findManyTaskField.schema';
import { InspectionFindManySchema as InspectionFindManySchema } from '../findManyInspection.schema';
import { PortaChecklistArgsObjectSchema as PortaChecklistArgsObjectSchema } from './PortaChecklistArgs.schema';
import { LibraArgsObjectSchema as LibraArgsObjectSchema } from './LibraArgs.schema';
import { TaskEventFindManySchema as TaskEventFindManySchema } from '../findManyTaskEvent.schema';
import { TaskCountOutputTypeArgsObjectSchema as TaskCountOutputTypeArgsObjectSchema } from './TaskCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  groupId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  title: z.boolean().optional(),
  desc: z.boolean().optional(),
  status: z.boolean().optional(),
  deadline: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  startReminderSentAt: z.boolean().optional(),
  fullAddress: z.boolean().optional(),
  lat: z.boolean().optional(),
  lng: z.boolean().optional(),
  isPickUp: z.boolean().optional(),
  accepted: z.boolean().optional(),
  hanging: z.boolean().optional(),
  assignedUserId: z.boolean().optional(),
  assignedUserId2: z.boolean().optional(),
  submittedUserId: z.boolean().optional(),
  project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
  comments: z.union([z.boolean(), z.lazy(() => CommentFindManySchema)]).optional(),
  fields: z.union([z.boolean(), z.lazy(() => TaskFieldFindManySchema)]).optional(),
  inspections: z.union([z.boolean(), z.lazy(() => InspectionFindManySchema)]).optional(),
  portaChecklist: z.union([z.boolean(), z.lazy(() => PortaChecklistArgsObjectSchema)]).optional(),
  libra: z.union([z.boolean(), z.lazy(() => LibraArgsObjectSchema)]).optional(),
  events: z.union([z.boolean(), z.lazy(() => TaskEventFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TaskCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TaskSelectObjectSchema: z.ZodType<Prisma.TaskSelect> = makeSchema() as unknown as z.ZodType<Prisma.TaskSelect>;
export const TaskSelectObjectZodSchema = makeSchema();
