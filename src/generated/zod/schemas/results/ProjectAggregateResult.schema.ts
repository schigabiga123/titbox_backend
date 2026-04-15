import * as z from 'zod';
export const ProjectAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    partnerName: z.number(),
    pocketId: z.number(),
    title: z.number(),
    updatedAt: z.number(),
    tasks: z.number(),
    syncLogs: z.number(),
    syncLogItems: z.number(),
    startDeadlineReminderLogs: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    partnerName: z.string().nullable(),
    pocketId: z.string().nullable(),
    title: z.string().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    partnerName: z.string().nullable(),
    pocketId: z.string().nullable(),
    title: z.string().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});