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
export const ProjectSyncLogItemSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemSumOrderByAggregateInput>;
export const ProjectSyncLogItemSumOrderByAggregateInputObjectZodSchema = makeSchema();
