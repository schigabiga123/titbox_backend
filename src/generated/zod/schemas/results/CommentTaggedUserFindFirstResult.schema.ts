import * as z from 'zod';
export const CommentTaggedUserFindFirstResultSchema = z.nullable(z.object({
  commentId: z.string(),
  userId: z.string(),
  comment: z.unknown()
}));