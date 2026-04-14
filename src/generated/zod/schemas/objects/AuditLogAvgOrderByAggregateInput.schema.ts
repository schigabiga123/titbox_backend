import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  responseStatus: SortOrderSchema.optional()
}).strict();
export const AuditLogAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AuditLogAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogAvgOrderByAggregateInput>;
export const AuditLogAvgOrderByAggregateInputObjectZodSchema = makeSchema();
