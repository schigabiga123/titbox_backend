import * as z from 'zod';
export const InspectionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  taskId: z.string(),
  key: z.string(),
  checked: z.boolean(),
  note: z.string(),
  data: z.string(),
  _count: z.object({
    id: z.number(),
    taskId: z.number(),
    key: z.number(),
    checked: z.number(),
    note: z.number(),
    data: z.number(),
    task: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    taskId: z.string().nullable(),
    key: z.string().nullable(),
    note: z.string().nullable(),
    data: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    taskId: z.string().nullable(),
    key: z.string().nullable(),
    note: z.string().nullable(),
    data: z.string().nullable()
  }).nullable().optional()
}));