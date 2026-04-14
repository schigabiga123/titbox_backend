import * as z from 'zod';
export const TaskEventFieldGroupByResultSchema = z.array(z.object({
  id: z.string(),
  taskEventId: z.string(),
  name: z.string(),
  data: z.string(),
  type: z.string(),
  _count: z.object({
    id: z.number(),
    taskEventId: z.number(),
    name: z.number(),
    data: z.number(),
    type: z.number(),
    taskEvent: z.number(),
    attachments: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    taskEventId: z.string().nullable(),
    name: z.string().nullable(),
    data: z.string().nullable(),
    type: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    taskEventId: z.string().nullable(),
    name: z.string().nullable(),
    data: z.string().nullable(),
    type: z.string().nullable()
  }).nullable().optional()
}));