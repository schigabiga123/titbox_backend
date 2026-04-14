import * as z from 'zod';
// prettier-ignore
export const TaskFieldInputSchema = z.object({
    id: z.string(),
    taskId: z.string(),
    pocketId: z.string().optional().nullable(),
    name: z.string(),
    data: z.string().optional().nullable(),
    type: z.string().optional().nullable(),
    task: z.unknown(),
    attachments: z.array(z.unknown()),
    libra: z.unknown().optional().nullable()
}).strict();

export type TaskFieldInputType = z.infer<typeof TaskFieldInputSchema>;
