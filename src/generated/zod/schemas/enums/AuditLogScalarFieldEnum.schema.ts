import * as z from 'zod';

export const AuditLogScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'success', 'method', 'path', 'routePath', 'responseStatus', 'firebaseUid', 'firebaseEmail', 'errorMessage', 'params', 'query', 'body', 'responseBody', 'resourceId'])

export type AuditLogScalarFieldEnum = z.infer<typeof AuditLogScalarFieldEnumSchema>;