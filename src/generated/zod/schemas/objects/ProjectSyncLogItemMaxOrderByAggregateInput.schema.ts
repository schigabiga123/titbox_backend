import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  syncLogId: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional(),
  pocketProjectId: SortOrderSchema.optional(),
  projectTitle: SortOrderSchema.optional(),
  success: SortOrderSchema.optional(),
  skipped: SortOrderSchema.optional(),
  skippedReason: SortOrderSchema.optional(),
  createdProjects: SortOrderSchema.optional(),
  updatedProjects: SortOrderSchema.optional(),
  createdTasks: SortOrderSchema.optional(),
  updatedTasks: SortOrderSchema.optional(),
  updatedTaskFields: SortOrderSchema.optional(),
  skippedTaskSync: SortOrderSchema.optional(),
  errorMessage: SortOrderSchema.optional()
}).strict();
export const ProjectSyncLogItemMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemMaxOrderByAggregateInput>;
export const ProjectSyncLogItemMaxOrderByAggregateInputObjectZodSchema = makeSchema();
