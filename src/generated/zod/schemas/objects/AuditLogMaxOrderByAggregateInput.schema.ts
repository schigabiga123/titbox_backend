import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  success: SortOrderSchema.optional(),
  method: SortOrderSchema.optional(),
  path: SortOrderSchema.optional(),
  routePath: SortOrderSchema.optional(),
  responseStatus: SortOrderSchema.optional(),
  firebaseUid: SortOrderSchema.optional(),
  firebaseEmail: SortOrderSchema.optional(),
  errorMessage: SortOrderSchema.optional(),
  resourceId: SortOrderSchema.optional()
}).strict();
export const AuditLogMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AuditLogMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogMaxOrderByAggregateInput>;
export const AuditLogMaxOrderByAggregateInputObjectZodSchema = makeSchema();
