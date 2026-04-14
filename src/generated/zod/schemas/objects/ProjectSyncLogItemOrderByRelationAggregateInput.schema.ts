import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ProjectSyncLogItemOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemOrderByRelationAggregateInput>;
export const ProjectSyncLogItemOrderByRelationAggregateInputObjectZodSchema = makeSchema();
