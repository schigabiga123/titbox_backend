import * as z from 'zod';
// prettier-ignore
export const LibraInputSchema = z.object({
    id: z.string(),
    projectId: z.string(),
    taskId: z.string(),
    szfCode: z.string().optional().nullable(),
    plateNumber: z.string().optional().nullable(),
    assignedUserId: z.string().optional().nullable(),
    amount: z.number().optional().nullable(),
    manuallyLibra: z.string().optional().nullable(),
    manuallyLibraComment: z.string().optional().nullable(),
    taskFieldId: z.string().optional().nullable(),
    task: z.unknown(),
    taskField: z.unknown().optional().nullable()
}).strict();

export type LibraInputType = z.infer<typeof LibraInputSchema>;
