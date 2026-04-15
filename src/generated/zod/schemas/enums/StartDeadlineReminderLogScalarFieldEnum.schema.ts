import * as z from 'zod';

export const StartDeadlineReminderLogScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'sentAt', 'taskId', 'projectId', 'userId', 'recipientRole'])

export type StartDeadlineReminderLogScalarFieldEnum = z.infer<typeof StartDeadlineReminderLogScalarFieldEnumSchema>;