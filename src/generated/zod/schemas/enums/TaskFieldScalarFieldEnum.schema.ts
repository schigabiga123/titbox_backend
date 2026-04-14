import * as z from 'zod';

export const TaskFieldScalarFieldEnumSchema = z.enum(['id', 'taskId', 'pocketId', 'name', 'data', 'type'])

export type TaskFieldScalarFieldEnum = z.infer<typeof TaskFieldScalarFieldEnumSchema>;