import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const InspectionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.InspectionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InspectionOrderByRelationAggregateInput>;
export const InspectionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
