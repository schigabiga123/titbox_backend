import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogArgsObjectSchema as ProjectSyncLogArgsObjectSchema } from './ProjectSyncLogArgs.schema';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  syncLogId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  pocketProjectId: z.boolean().optional(),
  projectTitle: z.boolean().optional(),
  success: z.boolean().optional(),
  skipped: z.boolean().optional(),
  skippedReason: z.boolean().optional(),
  createdProjects: z.boolean().optional(),
  updatedProjects: z.boolean().optional(),
  createdTasks: z.boolean().optional(),
  updatedTasks: z.boolean().optional(),
  updatedTaskFields: z.boolean().optional(),
  skippedTaskSync: z.boolean().optional(),
  errorMessage: z.boolean().optional(),
  changeDetails: z.boolean().optional(),
  syncLog: z.union([z.boolean(), z.lazy(() => ProjectSyncLogArgsObjectSchema)]).optional(),
  project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional()
}).strict();
export const ProjectSyncLogItemSelectObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemSelect>;
export const ProjectSyncLogItemSelectObjectZodSchema = makeSchema();
