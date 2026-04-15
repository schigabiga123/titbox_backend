import * as z from 'zod';
// prettier-ignore
export const NotificationLogInputSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    userId: z.string(),
    notification: z.unknown(),
    taskId: z.string(),
    subTaskId: z.string().optional().nullable(),
    commentId: z.string().optional().nullable(),
    finished: z.boolean(),
    deadline: z.boolean()
}).strict();

export type NotificationLogInputType = z.infer<typeof NotificationLogInputSchema>;
