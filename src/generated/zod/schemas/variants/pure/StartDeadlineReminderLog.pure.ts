import * as z from 'zod';
// prettier-ignore
export const StartDeadlineReminderLogModelSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    sentAt: z.date(),
    taskId: z.string(),
    projectId: z.string().nullable(),
    userId: z.string(),
    recipientRole: z.string().nullable(),
    task: z.unknown(),
    project: z.unknown().nullable()
}).strict();

export type StartDeadlineReminderLogPureType = z.infer<typeof StartDeadlineReminderLogModelSchema>;
