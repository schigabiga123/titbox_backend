import * as z from 'zod';
export const AuditLogFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  createdAt: z.date(),
  success: z.boolean(),
  method: z.string(),
  path: z.string(),
  routePath: z.string().optional(),
  responseStatus: z.number().int(),
  firebaseUid: z.string().optional(),
  firebaseEmail: z.string().optional(),
  errorMessage: z.string().optional(),
  params: z.unknown().optional(),
  query: z.unknown().optional(),
  body: z.unknown().optional(),
  responseBody: z.unknown().optional(),
  resourceId: z.string().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});