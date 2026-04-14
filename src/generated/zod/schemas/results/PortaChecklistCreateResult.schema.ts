import * as z from 'zod';
export const PortaChecklistCreateResultSchema = z.object({
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
});