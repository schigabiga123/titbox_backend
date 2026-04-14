import * as z from 'zod';
export const AuditLogGroupByResultSchema = z.array(z.object({
  id: z.string(),
  createdAt: z.date(),
  success: z.boolean(),
  method: z.string(),
  path: z.string(),
  routePath: z.string(),
  responseStatus: z.number().int(),
  firebaseUid: z.string(),
  firebaseEmail: z.string(),
  errorMessage: z.string(),
  params: z.unknown(),
  query: z.unknown(),
  body: z.unknown(),
  responseBody: z.unknown(),
  resourceId: z.string(),
  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    success: z.number(),
    method: z.number(),
    path: z.number(),
    routePath: z.number(),
    responseStatus: z.number(),
    firebaseUid: z.number(),
    firebaseEmail: z.number(),
    errorMessage: z.number(),
    params: z.number(),
    query: z.number(),
    body: z.number(),
    responseBody: z.number(),
    resourceId: z.number()
  }).optional(),
  _sum: z.object({
    responseStatus: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    responseStatus: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable(),
    method: z.string().nullable(),
    path: z.string().nullable(),
    routePath: z.string().nullable(),
    responseStatus: z.number().int().nullable(),
    firebaseUid: z.string().nullable(),
    firebaseEmail: z.string().nullable(),
    errorMessage: z.string().nullable(),
    resourceId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable(),
    method: z.string().nullable(),
    path: z.string().nullable(),
    routePath: z.string().nullable(),
    responseStatus: z.number().int().nullable(),
    firebaseUid: z.string().nullable(),
    firebaseEmail: z.string().nullable(),
    errorMessage: z.string().nullable(),
    resourceId: z.string().nullable()
  }).nullable().optional()
}));