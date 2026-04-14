import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  responseStatus: SortOrderSchema.optional()
}).strict();
export const AuditLogSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AuditLogSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogSumOrderByAggregateInput>;
export const AuditLogSumOrderByAggregateInputObjectZodSchema = makeSchema();
