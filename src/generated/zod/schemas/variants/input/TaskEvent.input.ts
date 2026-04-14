import * as z from 'zod';
// prettier-ignore
export const TaskEventInputSchema = z.object({
    id: z.string(),
    taskId: z.string(),
    name: z.string().optional().nullable(),
    createdAt: z.date().optional().nullable(),
    task: z.unknown(),
    fields: z.array(z.unknown())
}).strict();

export type TaskEventInputType = z.infer<typeof TaskEventInputSchema>;
