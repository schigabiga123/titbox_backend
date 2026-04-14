import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  success: z.boolean(),
  method: z.string(),
  path: z.string(),
  routePath: z.string().optional().nullable(),
  responseStatus: z.number().int(),
  firebaseUid: z.string().optional().nullable(),
  firebaseEmail: z.string().optional().nullable(),
  errorMessage: z.string().optional().nullable(),
  params: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  query: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  body: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  responseBody: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  resourceId: z.string().optional().nullable()
}).strict();
export const AuditLogCreateManyInputObjectSchema: z.ZodType<Prisma.AuditLogCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogCreateManyInput>;
export const AuditLogCreateManyInputObjectZodSchema = makeSchema();
