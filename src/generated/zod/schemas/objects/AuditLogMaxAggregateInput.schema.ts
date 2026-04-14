import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  success: z.literal(true).optional(),
  method: z.literal(true).optional(),
  path: z.literal(true).optional(),
  routePath: z.literal(true).optional(),
  responseStatus: z.literal(true).optional(),
  firebaseUid: z.literal(true).optional(),
  firebaseEmail: z.literal(true).optional(),
  errorMessage: z.literal(true).optional(),
  resourceId: z.literal(true).optional()
}).strict();
export const AuditLogMaxAggregateInputObjectSchema: z.ZodType<Prisma.AuditLogMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogMaxAggregateInputType>;
export const AuditLogMaxAggregateInputObjectZodSchema = makeSchema();
