import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { ProjectScalarRelationFilterObjectSchema as ProjectScalarRelationFilterObjectSchema } from './ProjectScalarRelationFilter.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { CommentListRelationFilterObjectSchema as CommentListRelationFilterObjectSchema } from './CommentListRelationFilter.schema';
import { TaskFieldListRelationFilterObjectSchema as TaskFieldListRelationFilterObjectSchema } from './TaskFieldListRelationFilter.schema';
import { InspectionListRelationFilterObjectSchema as InspectionListRelationFilterObjectSchema } from './InspectionListRelationFilter.schema';
import { PortaChecklistNullableScalarRelationFilterObjectSchema as PortaChecklistNullableScalarRelationFilterObjectSchema } from './PortaChecklistNullableScalarRelationFilter.schema';
import { PortaChecklistWhereInputObjectSchema as PortaChecklistWhereInputObjectSchema } from './PortaChecklistWhereInput.schema';
import { LibraNullableScalarRelationFilterObjectSchema as LibraNullableScalarRelationFilterObjectSchema } from './LibraNullableScalarRelationFilter.schema';
import { LibraWhereInputObjectSchema as LibraWhereInputObjectSchema } from './LibraWhereInput.schema';
import { TaskEventListRelationFilterObjectSchema as TaskEventListRelationFilterObjectSchema } from './TaskEventListRelationFilter.schema'

const taskwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TaskWhereInputObjectSchema), z.lazy(() => TaskWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TaskWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TaskWhereInputObjectSchema), z.lazy(() => TaskWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  groupId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  projectId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  desc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  deadline: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  startReminderSentAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  fullAddress: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  lat: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  lng: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  isPickUp: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  accepted: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  hanging: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  assignedUserId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  assignedUserId2: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  submittedUserId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  project: z.union([z.lazy(() => ProjectScalarRelationFilterObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema)]).optional(),
  comments: z.lazy(() => CommentListRelationFilterObjectSchema).optional(),
  fields: z.lazy(() => TaskFieldListRelationFilterObjectSchema).optional(),
  inspections: z.lazy(() => InspectionListRelationFilterObjectSchema).optional(),
  portaChecklist: z.union([z.lazy(() => PortaChecklistNullableScalarRelationFilterObjectSchema), z.lazy(() => PortaChecklistWhereInputObjectSchema)]).optional(),
  libra: z.union([z.lazy(() => LibraNullableScalarRelationFilterObjectSchema), z.lazy(() => LibraWhereInputObjectSchema)]).optional(),
  events: z.lazy(() => TaskEventListRelationFilterObjectSchema).optional()
}).strict();
export const TaskWhereInputObjectSchema: z.ZodType<Prisma.TaskWhereInput> = taskwhereinputSchema as unknown as z.ZodType<Prisma.TaskWhereInput>;
export const TaskWhereInputObjectZodSchema = taskwhereinputSchema;
