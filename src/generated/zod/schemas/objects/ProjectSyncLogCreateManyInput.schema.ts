import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  startedAt: z.coerce.date(),
  finishedAt: z.coerce.date(),
  success: z.boolean(),
  runnerName: z.string(),
  scheduleType: z.string(),
  selectedProjectTitle: z.string().optional().nullable(),
  projectId: z.string().optional().nullable(),
  processedProjects: z.number().int().optional(),
  createdProjects: z.number().int().optional(),
  updatedProjects: z.number().int().optional(),
  createdTasks: z.number().int().optional(),
  updatedTasks: z.number().int().optional(),
  updatedTaskFields: z.number().int().optional(),
  skippedProjects: z.number().int().optional(),
  skippedTaskSyncProjects: z.number().int().optional(),
  errorMessage: z.string().optional().nullable()
}).strict();
export const ProjectSyncLogCreateManyInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogCreateManyInput>;
export const ProjectSyncLogCreateManyInputObjectZodSchema = makeSchema();
