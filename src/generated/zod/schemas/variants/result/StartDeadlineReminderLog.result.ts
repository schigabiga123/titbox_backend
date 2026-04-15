import * as z from 'zod';
// prettier-ignore
export const StartDeadlineReminderLogResultSchema = z.object({
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

export type StartDeadlineReminderLogResultType = z.infer<typeof StartDeadlineReminderLogResultSchema>;
