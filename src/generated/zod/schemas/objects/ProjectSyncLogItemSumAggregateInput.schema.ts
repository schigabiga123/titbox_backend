import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  createdProjects: z.literal(true).optional(),
  updatedProjects: z.literal(true).optional(),
  createdTasks: z.literal(true).optional(),
  updatedTasks: z.literal(true).optional(),
  updatedTaskFields: z.literal(true).optional()
}).strict();
export const ProjectSyncLogItemSumAggregateInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemSumAggregateInputType>;
export const ProjectSyncLogItemSumAggregateInputObjectZodSchema = makeSchema();
