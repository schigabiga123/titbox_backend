import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProjectSyncLogItemCountOrderByAggregateInputObjectSchema as ProjectSyncLogItemCountOrderByAggregateInputObjectSchema } from './ProjectSyncLogItemCountOrderByAggregateInput.schema';
import { ProjectSyncLogItemAvgOrderByAggregateInputObjectSchema as ProjectSyncLogItemAvgOrderByAggregateInputObjectSchema } from './ProjectSyncLogItemAvgOrderByAggregateInput.schema';
import { ProjectSyncLogItemMaxOrderByAggregateInputObjectSchema as ProjectSyncLogItemMaxOrderByAggregateInputObjectSchema } from './ProjectSyncLogItemMaxOrderByAggregateInput.schema';
import { ProjectSyncLogItemMinOrderByAggregateInputObjectSchema as ProjectSyncLogItemMinOrderByAggregateInputObjectSchema } from './ProjectSyncLogItemMinOrderByAggregateInput.schema';
import { ProjectSyncLogItemSumOrderByAggregateInputObjectSchema as ProjectSyncLogItemSumOrderByAggregateInputObjectSchema } from './ProjectSyncLogItemSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  syncLogId: SortOrderSchema.optional(),
  projectId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pocketProjectId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  projectTitle: SortOrderSchema.optional(),
  success: SortOrderSchema.optional(),
  skipped: SortOrderSchema.optional(),
  skippedReason: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdProjects: SortOrderSchema.optional(),
  updatedProjects: SortOrderSchema.optional(),
  createdTasks: SortOrderSchema.optional(),
  updatedTasks: SortOrderSchema.optional(),
  updatedTaskFields: SortOrderSchema.optional(),
  skippedTaskSync: SortOrderSchema.optional(),
  errorMessage: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  changeDetails: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ProjectSyncLogItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ProjectSyncLogItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProjectSyncLogItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProjectSyncLogItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ProjectSyncLogItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProjectSyncLogItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemOrderByWithAggregationInput>;
export const ProjectSyncLogItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
