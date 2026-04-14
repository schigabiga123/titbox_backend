import * as z from 'zod';
export const TaskEventAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    taskId: z.number(),
    name: z.number(),
    createdAt: z.number(),
    task: z.number(),
    fields: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    taskId: z.string().nullable(),
    name: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    taskId: z.string().nullable(),
    name: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});