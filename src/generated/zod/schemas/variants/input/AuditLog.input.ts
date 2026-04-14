import * as z from 'zod';
// prettier-ignore
export const AuditLogInputSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    success: z.boolean(),
    method: z.string(),
    path: z.string(),
    routePath: z.string().optional().nullable(),
    responseStatus: z.number().int(),
    firebaseUid: z.string().optional().nullable(),
    firebaseEmail: z.string().optional().nullable(),
    errorMessage: z.string().optional().nullable(),
    params: z.unknown().optional().nullable(),
    query: z.unknown().optional().nullable(),
    body: z.unknown().optional().nullable(),
    responseBody: z.unknown().optional().nullable(),
    resourceId: z.string().optional().nullable()
}).strict();

export type AuditLogInputType = z.infer<typeof AuditLogInputSchema>;
