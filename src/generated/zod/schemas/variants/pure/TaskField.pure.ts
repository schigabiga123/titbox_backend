import * as z from 'zod';
// prettier-ignore
export const TaskFieldModelSchema = z.object({
    id: z.string(),
    taskId: z.string(),
    pocketId: z.string().nullable(),
    name: z.string(),
    data: z.string().nullable(),
    type: z.string().nullable(),
    task: z.unknown(),
    attachments: z.array(z.unknown()),
    libra: z.unknown().nullable()
}).strict();

export type TaskFieldPureType = z.infer<typeof TaskFieldModelSchema>;
