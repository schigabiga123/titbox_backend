import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProjectSyncLogCountOrderByAggregateInputObjectSchema as ProjectSyncLogCountOrderByAggregateInputObjectSchema } from './ProjectSyncLogCountOrderByAggregateInput.schema';
import { ProjectSyncLogAvgOrderByAggregateInputObjectSchema as ProjectSyncLogAvgOrderByAggregateInputObjectSchema } from './ProjectSyncLogAvgOrderByAggregateInput.schema';
import { ProjectSyncLogMaxOrderByAggregateInputObjectSchema as ProjectSyncLogMaxOrderByAggregateInputObjectSchema } from './ProjectSyncLogMaxOrderByAggregateInput.schema';
import { ProjectSyncLogMinOrderByAggregateInputObjectSchema as ProjectSyncLogMinOrderByAggregateInputObjectSchema } from './ProjectSyncLogMinOrderByAggregateInput.schema';
import { ProjectSyncLogSumOrderByAggregateInputObjectSchema as ProjectSyncLogSumOrderByAggregateInputObjectSchema } from './ProjectSyncLogSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  startedAt: SortOrderSchema.optional(),
  finishedAt: SortOrderSchema.optional(),
  success: SortOrderSchema.optional(),
  runnerName: SortOrderSchema.optional(),
  scheduleType: SortOrderSchema.optional(),
  selectedProjectTitle: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  projectId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  processedProjects: SortOrderSchema.optional(),
  createdProjects: SortOrderSchema.optional(),
  updatedProjects: SortOrderSchema.optional(),
  createdTasks: SortOrderSchema.optional(),
  updatedTasks: SortOrderSchema.optional(),
  updatedTaskFields: SortOrderSchema.optional(),
  skippedProjects: SortOrderSchema.optional(),
  skippedTaskSyncProjects: SortOrderSchema.optional(),
  errorMessage: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ProjectSyncLogCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ProjectSyncLogAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProjectSyncLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProjectSyncLogMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ProjectSyncLogSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProjectSyncLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogOrderByWithAggregationInput>;
export const ProjectSyncLogOrderByWithAggregationInputObjectZodSchema = makeSchema();
