import * as z from 'zod';
// prettier-ignore
export const ProjectSyncLogItemResultSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    syncLogId: z.string(),
    projectId: z.string().nullable(),
    pocketProjectId: z.string().nullable(),
    projectTitle: z.string(),
    success: z.boolean(),
    skipped: z.boolean(),
    skippedReason: z.string().nullable(),
    createdProjects: z.number().int(),
    updatedProjects: z.number().int(),
    createdTasks: z.number().int(),
    updatedTasks: z.number().int(),
    updatedTaskFields: z.number().int(),
    skippedTaskSync: z.boolean(),
    errorMessage: z.string().nullable(),
    changeDetails: z.unknown().nullable(),
    syncLog: z.unknown(),
    project: z.unknown().nullable()
}).strict();

export type ProjectSyncLogItemResultType = z.infer<typeof ProjectSyncLogItemResultSchema>;
