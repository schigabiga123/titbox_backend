import * as z from 'zod';
export const CommentTaggedUserDeleteResultSchema = z.nullable(z.object({
  commentId: z.string(),
  userId: z.string(),
  comment: z.unknown()
}));