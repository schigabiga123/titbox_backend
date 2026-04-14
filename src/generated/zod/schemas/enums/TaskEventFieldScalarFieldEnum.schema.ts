import * as z from 'zod';

export const TaskEventFieldScalarFieldEnumSchema = z.enum(['id', 'taskEventId', 'name', 'data', 'type'])

export type TaskEventFieldScalarFieldEnum = z.infer<typeof TaskEventFieldScalarFieldEnumSchema>;