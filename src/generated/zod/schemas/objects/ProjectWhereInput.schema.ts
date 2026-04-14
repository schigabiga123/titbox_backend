import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { TaskListRelationFilterObjectSchema as TaskListRelationFilterObjectSchema } from './TaskListRelationFilter.schema';
import { ProjectSyncLogListRelationFilterObjectSchema as ProjectSyncLogListRelationFilterObjectSchema } from './ProjectSyncLogListRelationFilter.schema';
import { ProjectSyncLogItemListRelationFilterObjectSchema as ProjectSyncLogItemListRelationFilterObjectSchema } from './ProjectSyncLogItemListRelationFilter.schema'

const projectwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectWhereInputObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectWhereInputObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  partnerName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  pocketId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  tasks: z.lazy(() => TaskListRelationFilterObjectSchema).optional(),
  syncLogs: z.lazy(() => ProjectSyncLogListRelationFilterObjectSchema).optional(),
  syncLogItems: z.lazy(() => ProjectSyncLogItemListRelationFilterObjectSchema).optional()
}).strict();
export const ProjectWhereInputObjectSchema: z.ZodType<Prisma.ProjectWhereInput> = projectwhereinputSchema as unknown as z.ZodType<Prisma.ProjectWhereInput>;
export const ProjectWhereInputObjectZodSchema = projectwhereinputSchema;
