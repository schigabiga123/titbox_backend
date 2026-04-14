import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  syncLogId: z.literal(true).optional(),
  projectId: z.literal(true).optional(),
  pocketProjectId: z.literal(true).optional(),
  projectTitle: z.literal(true).optional(),
  success: z.literal(true).optional(),
  skipped: z.literal(true).optional(),
  skippedReason: z.literal(true).optional(),
  createdProjects: z.literal(true).optional(),
  updatedProjects: z.literal(true).optional(),
  createdTasks: z.literal(true).optional(),
  updatedTasks: z.literal(true).optional(),
  updatedTaskFields: z.literal(true).optional(),
  skippedTaskSync: z.literal(true).optional(),
  errorMessage: z.literal(true).optional()
}).strict();
export const ProjectSyncLogItemMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemMaxAggregateInputType>;
export const ProjectSyncLogItemMaxAggregateInputObjectZodSchema = makeSchema();
