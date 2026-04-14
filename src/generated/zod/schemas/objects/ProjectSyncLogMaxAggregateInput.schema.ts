import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  startedAt: z.literal(true).optional(),
  finishedAt: z.literal(true).optional(),
  success: z.literal(true).optional(),
  runnerName: z.literal(true).optional(),
  scheduleType: z.literal(true).optional(),
  selectedProjectTitle: z.literal(true).optional(),
  projectId: z.literal(true).optional(),
  processedProjects: z.literal(true).optional(),
  createdProjects: z.literal(true).optional(),
  updatedProjects: z.literal(true).optional(),
  createdTasks: z.literal(true).optional(),
  updatedTasks: z.literal(true).optional(),
  updatedTaskFields: z.literal(true).optional(),
  skippedProjects: z.literal(true).optional(),
  skippedTaskSyncProjects: z.literal(true).optional(),
  errorMessage: z.literal(true).optional()
}).strict();
export const ProjectSyncLogMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogMaxAggregateInputType>;
export const ProjectSyncLogMaxAggregateInputObjectZodSchema = makeSchema();
