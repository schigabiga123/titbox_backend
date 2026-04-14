import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  processedProjects: SortOrderSchema.optional(),
  createdProjects: SortOrderSchema.optional(),
  updatedProjects: SortOrderSchema.optional(),
  createdTasks: SortOrderSchema.optional(),
  updatedTasks: SortOrderSchema.optional(),
  updatedTaskFields: SortOrderSchema.optional(),
  skippedProjects: SortOrderSchema.optional(),
  skippedTaskSyncProjects: SortOrderSchema.optional()
}).strict();
export const ProjectSyncLogSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogSumOrderByAggregateInput>;
export const ProjectSyncLogSumOrderByAggregateInputObjectZodSchema = makeSchema();
