import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditLogSelectObjectSchema as AuditLogSelectObjectSchema } from './AuditLogSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AuditLogSelectObjectSchema).optional()
}).strict();
export const AuditLogArgsObjectSchema = makeSchema();
export const AuditLogArgsObjectZodSchema = makeSchema();
