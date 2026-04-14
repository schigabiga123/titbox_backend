import * as z from 'zod';
export const TaskFieldGroupByResultSchema = z.array(z.object({
  id: z.string(),
  taskId: z.string(),
  pocketId: z.string(),
  name: z.string(),
  data: z.string(),
  type: z.string(),
  _count: z.object({
    id: z.number(),
    taskId: z.number(),
    pocketId: z.number(),
    name: z.number(),
    data: z.number(),
    type: z.number(),
    task: z.number(),
    attachments: z.number(),
    libra: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    taskId: z.string().nullable(),
    pocketId: z.string().nullable(),
    name: z.string().nullable(),
    data: z.string().nullable(),
    type: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    taskId: z.string().nullable(),
    pocketId: z.string().nullable(),
    name: z.string().nullable(),
    data: z.string().nullable(),
    type: z.string().nullable()
  }).nullable().optional()
}));