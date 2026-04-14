import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProjectSyncLogOrderByWithRelationInputObjectSchema as ProjectSyncLogOrderByWithRelationInputObjectSchema } from './ProjectSyncLogOrderByWithRelationInput.schema';
import { ProjectOrderByWithRelationInputObjectSchema as ProjectOrderByWithRelationInputObjectSchema } from './ProjectOrderByWithRelationInput.schema'

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
  syncLog: z.lazy(() => ProjectSyncLogOrderByWithRelationInputObjectSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ProjectSyncLogItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemOrderByWithRelationInput>;
export const ProjectSyncLogItemOrderByWithRelationInputObjectZodSchema = makeSchema();
