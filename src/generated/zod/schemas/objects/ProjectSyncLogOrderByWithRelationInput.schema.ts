import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProjectOrderByWithRelationInputObjectSchema as ProjectOrderByWithRelationInputObjectSchema } from './ProjectOrderByWithRelationInput.schema';
import { ProjectSyncLogItemOrderByRelationAggregateInputObjectSchema as ProjectSyncLogItemOrderByRelationAggregateInputObjectSchema } from './ProjectSyncLogItemOrderByRelationAggregateInput.schema'

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
  project: z.lazy(() => ProjectOrderByWithRelationInputObjectSchema).optional(),
  items: z.lazy(() => ProjectSyncLogItemOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ProjectSyncLogOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogOrderByWithRelationInput>;
export const ProjectSyncLogOrderByWithRelationInputObjectZodSchema = makeSchema();
