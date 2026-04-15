import * as z from 'zod';
export const StartDeadlineReminderLogAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    sentAt: z.number(),
    taskId: z.number(),
    projectId: z.number(),
    userId: z.number(),
    recipientRole: z.number(),
    task: z.number(),
    project: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable(),
    sentAt: z.date().nullable(),
    taskId: z.string().nullable(),
    projectId: z.string().nullable(),
    userId: z.string().nullable(),
    recipientRole: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    createdAt: z.date().nullable(),
    sentAt: z.date().nullable(),
    taskId: z.string().nullable(),
    projectId: z.string().nullable(),
    userId: z.string().nullable(),
    recipientRole: z.string().nullable()
  }).nullable().optional()});