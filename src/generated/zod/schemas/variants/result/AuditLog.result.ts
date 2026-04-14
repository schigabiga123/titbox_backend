import * as z from 'zod';
// prettier-ignore
export const AuditLogResultSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    success: z.boolean(),
    method: z.string(),
    path: z.string(),
    routePath: z.string().nullable(),
    responseStatus: z.number().int(),
    firebaseUid: z.string().nullable(),
    firebaseEmail: z.string().nullable(),
    errorMessage: z.string().nullable(),
    params: z.unknown().nullable(),
    query: z.unknown().nullable(),
    body: z.unknown().nullable(),
    responseBody: z.unknown().nullable(),
    resourceId: z.string().nullable()
}).strict();

export type AuditLogResultType = z.infer<typeof AuditLogResultSchema>;
