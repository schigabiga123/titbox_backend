import * as z from 'zod';
// prettier-ignore
export const CommentResultSchema = z.object({
    id: z.string(),
    taskId: z.string(),
    text: z.string(),
    submittedUserId: z.string().nullable(),
    createdAt: z.date().nullable(),
    task: z.unknown(),
    taggedUsers: z.array(z.unknown()),
    attachments: z.array(z.unknown())
}).strict();

export type CommentResultType = z.infer<typeof CommentResultSchema>;
