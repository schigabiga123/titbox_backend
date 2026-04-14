import * as z from 'zod';
export const CommentAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    taskId: z.number(),
    text: z.number(),
    submittedUserId: z.number(),
    createdAt: z.number(),
    task: z.number(),
    taggedUsers: z.number(),
    attachments: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    taskId: z.string().nullable(),
    text: z.string().nullable(),
    submittedUserId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    taskId: z.string().nullable(),
    text: z.string().nullable(),
    submittedUserId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});