import * as z from 'zod';
export const AttachmentGroupByResultSchema = z.array(z.object({
  id: z.string(),
  url: z.string(),
  commentId: z.string(),
  taskFieldId: z.string(),
  taskEventFieldId: z.string(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    url: z.number(),
    type: z.number(),
    commentId: z.number(),
    taskFieldId: z.number(),
    taskEventFieldId: z.number(),
    createdAt: z.number(),
    comment: z.number(),
    taskField: z.number(),
    taskEventField: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    url: z.string().nullable(),
    commentId: z.string().nullable(),
    taskFieldId: z.string().nullable(),
    taskEventFieldId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    url: z.string().nullable(),
    commentId: z.string().nullable(),
    taskFieldId: z.string().nullable(),
    taskEventFieldId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));