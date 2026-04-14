import * as z from 'zod';
// prettier-ignore
export const PortaChecklistInputSchema = z.object({
    id: z.string(),
    taskId: z.string(),
    isUserChecked: z.boolean().optional().nullable(),
    isTruckChecked: z.boolean().optional().nullable(),
    isTrailerChecked: z.boolean().optional().nullable(),
    isTraktorChecked: z.boolean().optional().nullable(),
    isBioChecked: z.boolean().optional().nullable(),
    isSzondaChecked: z.boolean().optional().nullable(),
    isStarted: z.boolean().optional().nullable(),
    startedAt: z.date().optional().nullable(),
    task: z.unknown()
}).strict();

export type PortaChecklistInputType = z.infer<typeof PortaChecklistInputSchema>;
