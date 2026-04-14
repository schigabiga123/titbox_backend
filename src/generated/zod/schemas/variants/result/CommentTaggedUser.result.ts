import * as z from 'zod';
// prettier-ignore
export const CommentTaggedUserResultSchema = z.object({
    commentId: z.string(),
    userId: z.string(),
    comment: z.unknown()
}).strict();

export type CommentTaggedUserResultType = z.infer<typeof CommentTaggedUserResultSchema>;
