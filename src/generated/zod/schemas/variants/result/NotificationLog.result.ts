import * as z from 'zod';
// prettier-ignore
export const NotificationLogResultSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    userId: z.string(),
    notification: z.unknown(),
    taskId: z.string(),
    subTaskId: z.string().nullable(),
    commentId: z.string().nullable(),
    finished: z.boolean(),
    deadline: z.boolean()
}).strict();

export type NotificationLogResultType = z.infer<typeof NotificationLogResultSchema>;
