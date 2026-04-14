import * as z from 'zod';
// prettier-ignore
export const ProjectModelSchema = z.object({
    id: z.string(),
    partnerName: z.string().nullable(),
    pocketId: z.string().nullable(),
    title: z.string(),
    updatedAt: z.date().nullable(),
    tasks: z.array(z.unknown()),
    syncLogs: z.array(z.unknown()),
    syncLogItems: z.array(z.unknown())
}).strict();

export type ProjectPureType = z.infer<typeof ProjectModelSchema>;
