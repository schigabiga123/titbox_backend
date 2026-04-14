import * as z from 'zod';
export const LibraAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    projectId: z.number(),
    taskId: z.number(),
    szfCode: z.number(),
    plateNumber: z.number(),
    assignedUserId: z.number(),
    amount: z.number(),
    manuallyLibra: z.number(),
    manuallyLibraComment: z.number(),
    taskFieldId: z.number(),
    task: z.number(),
    taskField: z.number()
  }).optional(),
  _sum: z.object({
    amount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    amount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    projectId: z.string().nullable(),
    taskId: z.string().nullable(),
    szfCode: z.string().nullable(),
    plateNumber: z.string().nullable(),
    assignedUserId: z.string().nullable(),
    amount: z.number().nullable(),
    manuallyLibra: z.string().nullable(),
    manuallyLibraComment: z.string().nullable(),
    taskFieldId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    projectId: z.string().nullable(),
    taskId: z.string().nullable(),
    szfCode: z.string().nullable(),
    plateNumber: z.string().nullable(),
    assignedUserId: z.string().nullable(),
    amount: z.number().nullable(),
    manuallyLibra: z.string().nullable(),
    manuallyLibraComment: z.string().nullable(),
    taskFieldId: z.string().nullable()
  }).nullable().optional()});