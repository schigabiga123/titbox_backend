import * as z from 'zod';
// prettier-ignore
export const StartDeadlineReminderLogInputSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    sentAt: z.date(),
    taskId: z.string(),
    projectId: z.string().optional().nullable(),
    userId: z.string(),
    recipientRole: z.string().optional().nullable(),
    task: z.unknown(),
    project: z.unknown().optional().nullable()
}).strict();

export type StartDeadlineReminderLogInputType = z.infer<typeof StartDeadlineReminderLogInputSchema>;
