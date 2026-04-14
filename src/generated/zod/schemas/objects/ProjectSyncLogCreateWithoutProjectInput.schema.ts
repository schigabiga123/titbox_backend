import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogItemCreateNestedManyWithoutSyncLogInputObjectSchema as ProjectSyncLogItemCreateNestedManyWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemCreateNestedManyWithoutSyncLogInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  startedAt: z.coerce.date(),
  finishedAt: z.coerce.date(),
  success: z.boolean(),
  runnerName: z.string(),
  scheduleType: z.string(),
  selectedProjectTitle: z.string().optional().nullable(),
  processedProjects: z.number().int().optional(),
  createdProjects: z.number().int().optional(),
  updatedProjects: z.number().int().optional(),
  createdTasks: z.number().int().optional(),
  updatedTasks: z.number().int().optional(),
  updatedTaskFields: z.number().int().optional(),
  skippedProjects: z.number().int().optional(),
  skippedTaskSyncProjects: z.number().int().optional(),
  errorMessage: z.string().optional().nullable(),
  items: z.lazy(() => ProjectSyncLogItemCreateNestedManyWithoutSyncLogInputObjectSchema).optional()
}).strict();
export const ProjectSyncLogCreateWithoutProjectInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogCreateWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogCreateWithoutProjectInput>;
export const ProjectSyncLogCreateWithoutProjectInputObjectZodSchema = makeSchema();
