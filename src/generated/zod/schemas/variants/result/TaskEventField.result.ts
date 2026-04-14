import * as z from 'zod';
// prettier-ignore
export const TaskEventFieldResultSchema = z.object({
    id: z.string(),
    taskEventId: z.string(),
    name: z.string(),
    data: z.string().nullable(),
    type: z.string().nullable(),
    taskEvent: z.unknown(),
    attachments: z.array(z.unknown())
}).strict();

export type TaskEventFieldResultType = z.infer<typeof TaskEventFieldResultSchema>;
