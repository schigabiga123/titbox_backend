import * as z from 'zod';

export const InspectionScalarFieldEnumSchema = z.enum(['id', 'taskId', 'key', 'checked', 'note', 'data'])

export type InspectionScalarFieldEnum = z.infer<typeof InspectionScalarFieldEnumSchema>;