import * as z from 'zod';
// prettier-ignore
export const InspectionModelSchema = z.object({
    id: z.string(),
    taskId: z.string(),
    key: z.string(),
    checked: z.boolean(),
    note: z.string().nullable(),
    data: z.string().nullable(),
    task: z.unknown()
}).strict();

export type InspectionPureType = z.infer<typeof InspectionModelSchema>;
