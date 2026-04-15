import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema'

const auditlogwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AuditLogWhereInputObjectSchema), z.lazy(() => AuditLogWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AuditLogWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AuditLogWhereInputObjectSchema), z.lazy(() => AuditLogWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  success: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  method: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  path: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  routePath: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  responseStatus: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  firebaseUid: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  firebaseEmail: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  errorMessage: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  params: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  query: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  body: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  responseBody: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  resourceId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const AuditLogWhereInputObjectSchema: z.ZodType<Prisma.AuditLogWhereInput> = auditlogwhereinputSchema as unknown as z.ZodType<Prisma.AuditLogWhereInput>;
export const AuditLogWhereInputObjectZodSchema = auditlogwhereinputSchema;
