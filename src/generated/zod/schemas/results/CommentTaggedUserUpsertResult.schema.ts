import * as z from 'zod';
export const CommentTaggedUserUpsertResultSchema = z.object({
  commentId: z.string(),
  userId: z.string(),
  comment: z.unknown()
});