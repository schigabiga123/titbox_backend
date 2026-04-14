import * as z from 'zod';
// prettier-ignore
export const ProjectInputSchema = z.object({
    id: z.string(),
    partnerName: z.string().optional().nullable(),
    pocketId: z.string().optional().nullable(),
    title: z.string(),
    updatedAt: z.date().optional().nullable(),
    tasks: z.array(z.unknown()),
    syncLogs: z.array(z.unknown()),
    syncLogItems: z.array(z.unknown())
}).strict();

export type ProjectInputType = z.infer<typeof ProjectInputSchema>;
