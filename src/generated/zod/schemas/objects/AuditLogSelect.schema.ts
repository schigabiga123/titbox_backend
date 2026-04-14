import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  success: z.boolean().optional(),
  method: z.boolean().optional(),
  path: z.boolean().optional(),
  routePath: z.boolean().optional(),
  responseStatus: z.boolean().optional(),
  firebaseUid: z.boolean().optional(),
  firebaseEmail: z.boolean().optional(),
  errorMessage: z.boolean().optional(),
  params: z.boolean().optional(),
  query: z.boolean().optional(),
  body: z.boolean().optional(),
  responseBody: z.boolean().optional(),
  resourceId: z.boolean().optional()
}).strict();
export const AuditLogSelectObjectSchema: z.ZodType<Prisma.AuditLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogSelect>;
export const AuditLogSelectObjectZodSchema = makeSchema();
