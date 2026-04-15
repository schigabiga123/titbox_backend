import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AuditLogCountOrderByAggregateInputObjectSchema as AuditLogCountOrderByAggregateInputObjectSchema } from './AuditLogCountOrderByAggregateInput.schema';
import { AuditLogAvgOrderByAggregateInputObjectSchema as AuditLogAvgOrderByAggregateInputObjectSchema } from './AuditLogAvgOrderByAggregateInput.schema';
import { AuditLogMaxOrderByAggregateInputObjectSchema as AuditLogMaxOrderByAggregateInputObjectSchema } from './AuditLogMaxOrderByAggregateInput.schema';
import { AuditLogMinOrderByAggregateInputObjectSchema as AuditLogMinOrderByAggregateInputObjectSchema } from './AuditLogMinOrderByAggregateInput.schema';
import { AuditLogSumOrderByAggregateInputObjectSchema as AuditLogSumOrderByAggregateInputObjectSchema } from './AuditLogSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  success: SortOrderSchema.optional(),
  method: SortOrderSchema.optional(),
  path: SortOrderSchema.optional(),
  routePath: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  responseStatus: SortOrderSchema.optional(),
  firebaseUid: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  firebaseEmail: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  errorMessage: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  params: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  query: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  body: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  responseBody: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  resourceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => AuditLogCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AuditLogAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AuditLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AuditLogMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AuditLogSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AuditLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AuditLogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogOrderByWithAggregationInput>;
export const AuditLogOrderByWithAggregationInputObjectZodSchema = makeSchema();
