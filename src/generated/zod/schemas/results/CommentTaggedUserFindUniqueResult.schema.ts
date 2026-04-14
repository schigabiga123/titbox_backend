import * as z from 'zod';
export const CommentTaggedUserFindUniqueResultSchema = z.nullable(z.object({
  commentId: z.string(),
  userId: z.string(),
  comment: z.unknown()
}));