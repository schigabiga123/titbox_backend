import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TaskScalarRelationFilterObjectSchema as TaskScalarRelationFilterObjectSchema } from './TaskScalarRelationFilter.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema';
import { ProjectNullableScalarRelationFilterObjectSchema as ProjectNullableScalarRelationFilterObjectSchema } from './ProjectNullableScalarRelationFilter.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const startdeadlinereminderlogwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StartDeadlineReminderLogWhereInputObjectSchema), z.lazy(() => StartDeadlineReminderLogWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StartDeadlineReminderLogWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StartDeadlineReminderLogWhereInputObjectSchema), z.lazy(() => StartDeadlineReminderLogWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  sentAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  taskId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  projectId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  recipientRole: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  task: z.union([z.lazy(() => TaskScalarRelationFilterObjectSchema), z.lazy(() => TaskWhereInputObjectSchema)]).optional(),
  project: z.union([z.lazy(() => ProjectNullableScalarRelationFilterObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema)]).optional()
}).strict();
export const StartDeadlineReminderLogWhereInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogWhereInput> = startdeadlinereminderlogwhereinputSchema as unknown as z.ZodType<Prisma.StartDeadlineReminderLogWhereInput>;
export const StartDeadlineReminderLogWhereInputObjectZodSchema = startdeadlinereminderlogwhereinputSchema;
