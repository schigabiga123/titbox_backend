import * as z from 'zod';
export const AuditLogAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});