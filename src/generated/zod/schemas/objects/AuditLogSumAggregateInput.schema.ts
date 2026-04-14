import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  responseStatus: z.literal(true).optional()
}).strict();
export const AuditLogSumAggregateInputObjectSchema: z.ZodType<Prisma.AuditLogSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogSumAggregateInputType>;
export const AuditLogSumAggregateInputObjectZodSchema = makeSchema();
