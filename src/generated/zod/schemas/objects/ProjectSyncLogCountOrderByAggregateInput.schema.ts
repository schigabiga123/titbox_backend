import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  startedAt: SortOrderSchema.optional(),
  finishedAt: SortOrderSchema.optional(),
  success: SortOrderSchema.optional(),
  runnerName: SortOrderSchema.optional(),
  scheduleType: SortOrderSchema.optional(),
  selectedProjectTitle: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional(),
  processedProjects: SortOrderSchema.optional(),
  createdProjects: SortOrderSchema.optional(),
  updatedProjects: SortOrderSchema.optional(),
  createdTasks: SortOrderSchema.optional(),
  updatedTasks: SortOrderSchema.optional(),
  updatedTaskFields: SortOrderSchema.optional(),
  skippedProjects: SortOrderSchema.optional(),
  skippedTaskSyncProjects: SortOrderSchema.optional(),
  errorMessage: SortOrderSchema.optional()
}).strict();
export const ProjectSyncLogCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogCountOrderByAggregateInput>;
export const ProjectSyncLogCountOrderByAggregateInputObjectZodSchema = makeSchema();
