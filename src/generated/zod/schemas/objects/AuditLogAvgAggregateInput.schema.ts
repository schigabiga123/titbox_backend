import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  responseStatus: z.literal(true).optional()
}).strict();
export const AuditLogAvgAggregateInputObjectSchema: z.ZodType<Prisma.AuditLogAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogAvgAggregateInputType>;
export const AuditLogAvgAggregateInputObjectZodSchema = makeSchema();
