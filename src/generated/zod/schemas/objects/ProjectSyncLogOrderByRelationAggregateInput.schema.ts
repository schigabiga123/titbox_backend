import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ProjectSyncLogOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogOrderByRelationAggregateInput>;
export const ProjectSyncLogOrderByRelationAggregateInputObjectZodSchema = makeSchema();
