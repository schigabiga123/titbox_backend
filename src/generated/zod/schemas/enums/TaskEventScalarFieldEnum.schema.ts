import * as z from 'zod';

export const TaskEventScalarFieldEnumSchema = z.enum(['id', 'taskId', 'name', 'status', 'createdAt'])

export type TaskEventScalarFieldEnum = z.infer<typeof TaskEventScalarFieldEnumSchema>;