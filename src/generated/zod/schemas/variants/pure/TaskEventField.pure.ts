import * as z from 'zod';
// prettier-ignore
export const TaskEventFieldModelSchema = z.object({
    id: z.string(),
    taskEventId: z.string(),
    name: z.string(),
    data: z.string().nullable(),
    type: z.string().nullable(),
    taskEvent: z.unknown(),
    attachments: z.array(z.unknown())
}).strict();

export type TaskEventFieldPureType = z.infer<typeof TaskEventFieldModelSchema>;
