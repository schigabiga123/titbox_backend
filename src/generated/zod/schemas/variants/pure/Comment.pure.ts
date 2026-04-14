import * as z from 'zod';
// prettier-ignore
export const CommentModelSchema = z.object({
    id: z.string(),
    taskId: z.string(),
    text: z.string(),
    submittedUserId: z.string().nullable(),
    createdAt: z.date().nullable(),
    task: z.unknown(),
    taggedUsers: z.array(z.unknown()),
    attachments: z.array(z.unknown())
}).strict();

export type CommentPureType = z.infer<typeof CommentModelSchema>;
