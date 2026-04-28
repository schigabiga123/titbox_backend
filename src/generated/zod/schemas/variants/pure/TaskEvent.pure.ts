import * as z from 'zod';
// prettier-ignore
export const TaskEventModelSchema = z.object({
    id: z.string(),
    taskId: z.string(),
    name: z.string().nullable(),
    status: z.string(),
    createdAt: z.date().nullable(),
    task: z.unknown(),
    fields: z.array(z.unknown())
}).strict();

export type TaskEventPureType = z.infer<typeof TaskEventModelSchema>;
