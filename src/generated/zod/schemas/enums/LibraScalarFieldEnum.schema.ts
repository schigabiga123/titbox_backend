import * as z from 'zod';

export const LibraScalarFieldEnumSchema = z.enum(['id', 'projectId', 'taskId', 'szfCode', 'plateNumber', 'assignedUserId', 'amount', 'manuallyLibra', 'manuallyLibraComment', 'taskFieldId'])

export type LibraScalarFieldEnum = z.infer<typeof LibraScalarFieldEnumSchema>;