import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { ProjectSyncLogScalarRelationFilterObjectSchema as ProjectSyncLogScalarRelationFilterObjectSchema } from './ProjectSyncLogScalarRelationFilter.schema';
import { ProjectSyncLogWhereInputObjectSchema as ProjectSyncLogWhereInputObjectSchema } from './ProjectSyncLogWhereInput.schema';
import { ProjectNullableScalarRelationFilterObjectSchema as ProjectNullableScalarRelationFilterObjectSchema } from './ProjectNullableScalarRelationFilter.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const projectsynclogitemwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectSyncLogItemWhereInputObjectSchema), z.lazy(() => ProjectSyncLogItemWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectSyncLogItemWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectSyncLogItemWhereInputObjectSchema), z.lazy(() => ProjectSyncLogItemWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  syncLogId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  projectId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  pocketProjectId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  projectTitle: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  success: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  skipped: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  skippedReason: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdProjects: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  updatedProjects: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdTasks: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  updatedTasks: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  updatedTaskFields: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  skippedTaskSync: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  errorMessage: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  changeDetails: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  syncLog: z.union([z.lazy(() => ProjectSyncLogScalarRelationFilterObjectSchema), z.lazy(() => ProjectSyncLogWhereInputObjectSchema)]).optional(),
  project: z.union([z.lazy(() => ProjectNullableScalarRelationFilterObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema)]).optional()
}).strict();
export const ProjectSyncLogItemWhereInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemWhereInput> = projectsynclogitemwhereinputSchema as unknown as z.ZodType<Prisma.ProjectSyncLogItemWhereInput>;
export const ProjectSyncLogItemWhereInputObjectZodSchema = projectsynclogitemwhereinputSchema;
