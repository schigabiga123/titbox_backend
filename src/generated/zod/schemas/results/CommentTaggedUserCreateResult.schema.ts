import * as z from 'zod';
export const CommentTaggedUserCreateResultSchema = z.object({
  commentId: z.string(),
  userId: z.string(),
  comment: z.unknown()
});