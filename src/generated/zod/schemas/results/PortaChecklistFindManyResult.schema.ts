import * as z from 'zod';
export const PortaChecklistFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  taskId: z.string(),
  isUserChecked: z.boolean().optional(),
  isTruckChecked: z.boolean().optional(),
  isTrailerChecked: z.boolean().optional(),
  isTraktorChecked: z.boolean().optional(),
  isBioChecked: z.boolean().optional(),
  isSzondaChecked: z.boolean().optional(),
  isStarted: z.boolean().optional(),
  startedAt: z.date().optional(),
  task: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});