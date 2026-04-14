import * as z from 'zod';
// prettier-ignore
export const TaskEventResultSchema = z.object({
    id: z.string(),
    taskId: z.string(),
    name: z.string().nullable(),
    createdAt: z.date().nullable(),
    task: z.unknown(),
    fields: z.array(z.unknown())
}).strict();

export type TaskEventResultType = z.infer<typeof TaskEventResultSchema>;
