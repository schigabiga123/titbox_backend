import * as z from 'zod';
// prettier-ignore
export const TaskEventFieldInputSchema = z.object({
    id: z.string(),
    taskEventId: z.string(),
    name: z.string(),
    data: z.string().optional().nullable(),
    type: z.string().optional().nullable(),
    taskEvent: z.unknown(),
    attachments: z.array(z.unknown())
}).strict();

export type TaskEventFieldInputType = z.infer<typeof TaskEventFieldInputSchema>;
