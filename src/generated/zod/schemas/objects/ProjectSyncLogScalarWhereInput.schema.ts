import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const projectsynclogscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectSyncLogScalarWhereInputObjectSchema), z.lazy(() => ProjectSyncLogScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectSyncLogScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectSyncLogScalarWhereInputObjectSchema), z.lazy(() => ProjectSyncLogScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  startedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  finishedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  success: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  runnerName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  scheduleType: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  selectedProjectTitle: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  projectId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  processedProjects: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdProjects: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  updatedProjects: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdTasks: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  updatedTasks: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  updatedTaskFields: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  skippedProjects: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  skippedTaskSyncProjects: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  errorMessage: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const ProjectSyncLogScalarWhereInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogScalarWhereInput> = projectsynclogscalarwhereinputSchema as unknown as z.ZodType<Prisma.ProjectSyncLogScalarWhereInput>;
export const ProjectSyncLogScalarWhereInputObjectZodSchema = projectsynclogscalarwhereinputSchema;
