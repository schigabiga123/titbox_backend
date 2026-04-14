import * as z from 'zod';
export const CommentTaggedUserGroupByResultSchema = z.array(z.object({
  commentId: z.string(),
  userId: z.string(),
  _count: z.object({
    commentId: z.number(),
    userId: z.number(),
    comment: z.number()
  }).optional(),
  _min: z.object({
    commentId: z.string().nullable(),
    userId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    commentId: z.string().nullable(),
    userId: z.string().nullable()
  }).nullable().optional()
}));