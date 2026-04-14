import * as z from 'zod';
// prettier-ignore
export const ProjectSyncLogItemInputSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    syncLogId: z.string(),
    projectId: z.string().optional().nullable(),
    pocketProjectId: z.string().optional().nullable(),
    projectTitle: z.string(),
    success: z.boolean(),
    skipped: z.boolean(),
    skippedReason: z.string().optional().nullable(),
    createdProjects: z.number().int(),
    updatedProjects: z.number().int(),
    createdTasks: z.number().int(),
    updatedTasks: z.number().int(),
    updatedTaskFields: z.number().int(),
    skippedTaskSync: z.boolean(),
    errorMessage: z.string().optional().nullable(),
    changeDetails: z.unknown().optional().nullable(),
    syncLog: z.unknown(),
    project: z.unknown().optional().nullable()
}).strict();

export type ProjectSyncLogItemInputType = z.infer<typeof ProjectSyncLogItemInputSchema>;
