import * as z from 'zod';
// prettier-ignore
export const NotificationLogModelSchema = z.object({
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

export type NotificationLogPureType = z.infer<typeof NotificationLogModelSchema>;
