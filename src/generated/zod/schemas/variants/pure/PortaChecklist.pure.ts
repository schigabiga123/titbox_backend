import * as z from 'zod';
// prettier-ignore
export const PortaChecklistModelSchema = z.object({
    id: z.string(),
    taskId: z.string(),
    isUserChecked: z.boolean().nullable(),
    isTruckChecked: z.boolean().nullable(),
    isTrailerChecked: z.boolean().nullable(),
    isTraktorChecked: z.boolean().nullable(),
    isBioChecked: z.boolean().nullable(),
    isSzondaChecked: z.boolean().nullable(),
    isStarted: z.boolean().nullable(),
    startedAt: z.date().nullable(),
    task: z.unknown()
}).strict();

export type PortaChecklistPureType = z.infer<typeof PortaChecklistModelSchema>;
