import * as z from 'zod';
export const AuditLogUpsertResultSchema = z.object({
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
});