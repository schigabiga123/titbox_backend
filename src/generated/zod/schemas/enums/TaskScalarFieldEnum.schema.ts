import * as z from 'zod';

export const TaskScalarFieldEnumSchema = z.enum(['id', 'groupId', 'projectId', 'title', 'desc', 'status', 'deadline', 'createdAt', 'startReminderSentAt', 'fullAddress', 'lat', 'lng', 'isPickUp', 'accepted', 'hanging', 'assignedUserId', 'assignedUserId2', 'submittedUserId'])

export type TaskScalarFieldEnum = z.infer<typeof TaskScalarFieldEnumSchema>;