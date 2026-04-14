import * as z from 'zod';
export const PortaChecklistGroupByResultSchema = z.array(z.object({
  id: z.string(),
  taskId: z.string(),
  isUserChecked: z.boolean(),
  isTruckChecked: z.boolean(),
  isTrailerChecked: z.boolean(),
  isTraktorChecked: z.boolean(),
  isBioChecked: z.boolean(),
  isSzondaChecked: z.boolean(),
  isStarted: z.boolean(),
  startedAt: z.date(),
  _count: z.object({
    id: z.number(),
    taskId: z.number(),
    isUserChecked: z.number(),
    isTruckChecked: z.number(),
    isTrailerChecked: z.number(),
    isTraktorChecked: z.number(),
    isBioChecked: z.number(),
    isSzondaChecked: z.number(),
    isStarted: z.number(),
    startedAt: z.number(),
    task: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    taskId: z.string().nullable(),
    startedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    taskId: z.string().nullable(),
    startedAt: z.date().nullable()
  }).nullable().optional()
}));