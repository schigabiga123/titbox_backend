import * as z from 'zod';
// prettier-ignore
export const CommentTaggedUserInputSchema = z.object({
    commentId: z.string(),
    userId: z.string(),
    comment: z.unknown()
}).strict();

export type CommentTaggedUserInputType = z.infer<typeof CommentTaggedUserInputSchema>;
