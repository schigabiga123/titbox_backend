import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { ProjectNullableScalarRelationFilterObjectSchema as ProjectNullableScalarRelationFilterObjectSchema } from './ProjectNullableScalarRelationFilter.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { ProjectSyncLogItemListRelationFilterObjectSchema as ProjectSyncLogItemListRelationFilterObjectSchema } from './ProjectSyncLogItemListRelationFilter.schema'

const projectsynclogwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectSyncLogWhereInputObjectSchema), z.lazy(() => ProjectSyncLogWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectSyncLogWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectSyncLogWhereInputObjectSchema), z.lazy(() => ProjectSyncLogWhereInputObjectSchema).array()]).optional(),
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
  errorMessage: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  project: z.union([z.lazy(() => ProjectNullableScalarRelationFilterObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema)]).optional(),
  items: z.lazy(() => ProjectSyncLogItemListRelationFilterObjectSchema).optional()
}).strict();
export const ProjectSyncLogWhereInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogWhereInput> = projectsynclogwhereinputSchema as unknown as z.ZodType<Prisma.ProjectSyncLogWhereInput>;
export const ProjectSyncLogWhereInputObjectZodSchema = projectsynclogwhereinputSchema;
