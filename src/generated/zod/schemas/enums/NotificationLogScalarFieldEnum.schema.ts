import * as z from 'zod';

export const NotificationLogScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'userId', 'notification', 'taskId', 'subTaskId', 'commentId', 'finished', 'deadline'])

export type NotificationLogScalarFieldEnum = z.infer<typeof NotificationLogScalarFieldEnumSchema>;