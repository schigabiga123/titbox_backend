import * as z from 'zod';
// prettier-ignore
export const InspectionInputSchema = z.object({
    id: z.string(),
    taskId: z.string(),
    key: z.string(),
    checked: z.boolean(),
    note: z.string().optional().nullable(),
    data: z.string().optional().nullable(),
    task: z.unknown()
}).strict();

export type InspectionInputType = z.infer<typeof InspectionInputSchema>;
