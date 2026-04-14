import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  processedProjects: z.literal(true).optional(),
  createdProjects: z.literal(true).optional(),
  updatedProjects: z.literal(true).optional(),
  createdTasks: z.literal(true).optional(),
  updatedTasks: z.literal(true).optional(),
  updatedTaskFields: z.literal(true).optional(),
  skippedProjects: z.literal(true).optional(),
  skippedTaskSyncProjects: z.literal(true).optional()
}).strict();
export const ProjectSyncLogAvgAggregateInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogAvgAggregateInputType>;
export const ProjectSyncLogAvgAggregateInputObjectZodSchema = makeSchema();
