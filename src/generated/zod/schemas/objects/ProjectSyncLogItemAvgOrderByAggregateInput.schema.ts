import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  createdProjects: SortOrderSchema.optional(),
  updatedProjects: SortOrderSchema.optional(),
  createdTasks: SortOrderSchema.optional(),
  updatedTasks: SortOrderSchema.optional(),
  updatedTaskFields: SortOrderSchema.optional()
}).strict();
export const ProjectSyncLogItemAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemAvgOrderByAggregateInput>;
export const ProjectSyncLogItemAvgOrderByAggregateInputObjectZodSchema = makeSchema();
