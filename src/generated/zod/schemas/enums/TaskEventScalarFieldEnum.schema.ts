import * as z from 'zod';

export const TaskEventScalarFieldEnumSchema = z.enum(['id', 'taskId', 'name', 'createdAt'])

export type TaskEventScalarFieldEnum = z.infer<typeof TaskEventScalarFieldEnumSchema>;