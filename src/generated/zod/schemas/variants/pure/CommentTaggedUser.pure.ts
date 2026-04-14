import * as z from 'zod';
// prettier-ignore
export const CommentTaggedUserModelSchema = z.object({
    commentId: z.string(),
    userId: z.string(),
    comment: z.unknown()
}).strict();

export type CommentTaggedUserPureType = z.infer<typeof CommentTaggedUserModelSchema>;
