import * as z from 'zod';
export const NotificationLogAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    userId: z.number(),
    notification: z.number(),
    taskId: z.number(),
    subTaskId: z.number(),
    commentId: z.number(),
    finished: z.number(),
    deadline: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable(),
    userId: z.string().nullable(),
    taskId: z.string().nullable(),
    subTaskId: z.string().nullable(),
    commentId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable(),
    userId: z.string().nullable(),
    taskId: z.string().nullable(),
    subTaskId: z.string().nullable(),
    commentId: z.string().nullable()
  }).nullable().optional()});