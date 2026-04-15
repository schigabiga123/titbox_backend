import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema';
import { ProjectSyncLogItemFindManySchema as ProjectSyncLogItemFindManySchema } from '../findManyProjectSyncLogItem.schema';
import { ProjectSyncLogCountOutputTypeArgsObjectSchema as ProjectSyncLogCountOutputTypeArgsObjectSchema } from './ProjectSyncLogCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  startedAt: z.boolean().optional(),
  finishedAt: z.boolean().optional(),
  success: z.boolean().optional(),
  runnerName: z.boolean().optional(),
  scheduleType: z.boolean().optional(),
  selectedProjectTitle: z.boolean().optional(),
  projectId: z.boolean().optional(),
  processedProjects: z.boolean().optional(),
  createdProjects: z.boolean().optional(),
  updatedProjects: z.boolean().optional(),
  createdTasks: z.boolean().optional(),
  updatedTasks: z.boolean().optional(),
  updatedTaskFields: z.boolean().optional(),
  skippedProjects: z.boolean().optional(),
  skippedTaskSyncProjects: z.boolean().optional(),
  errorMessage: z.boolean().optional(),
  project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
  items: z.union([z.boolean(), z.lazy(() => ProjectSyncLogItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProjectSyncLogCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProjectSyncLogSelectObjectSchema: z.ZodType<Prisma.ProjectSyncLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogSelect>;
export const ProjectSyncLogSelectObjectZodSchema = makeSchema();
