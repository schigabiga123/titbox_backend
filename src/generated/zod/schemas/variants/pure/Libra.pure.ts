import * as z from 'zod';
// prettier-ignore
export const LibraModelSchema = z.object({
    id: z.string(),
    projectId: z.string(),
    taskId: z.string(),
    szfCode: z.string().nullable(),
    plateNumber: z.string().nullable(),
    assignedUserId: z.string().nullable(),
    amount: z.number().nullable(),
    manuallyLibra: z.string().nullable(),
    manuallyLibraComment: z.string().nullable(),
    taskFieldId: z.string().nullable(),
    task: z.unknown(),
    taskField: z.unknown().nullable()
}).strict();

export type LibraPureType = z.infer<typeof LibraModelSchema>;
