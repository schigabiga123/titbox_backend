import * as z from 'zod';
// prettier-ignore
export const CommentInputSchema = z.object({
    id: z.string(),
    taskId: z.string(),
    text: z.string(),
    submittedUserId: z.string().optional().nullable(),
    createdAt: z.date().optional().nullable(),
    task: z.unknown(),
    taggedUsers: z.array(z.unknown()),
    attachments: z.array(z.unknown())
}).strict();

export type CommentInputType = z.infer<typeof CommentInputSchema>;
