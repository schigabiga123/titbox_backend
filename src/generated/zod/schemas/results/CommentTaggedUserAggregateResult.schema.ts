import * as z from 'zod';
export const CommentTaggedUserAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});