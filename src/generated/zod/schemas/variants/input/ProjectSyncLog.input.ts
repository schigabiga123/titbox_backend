import * as z from 'zod';
// prettier-ignore
export const ProjectSyncLogInputSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    startedAt: z.date(),
    finishedAt: z.date(),
    success: z.boolean(),
    runnerName: z.string(),
    scheduleType: z.string(),
    selectedProjectTitle: z.string().optional().nullable(),
    projectId: z.string().optional().nullable(),
    processedProjects: z.number().int(),
    createdProjects: z.number().int(),
    updatedProjects: z.number().int(),
    createdTasks: z.number().int(),
    updatedTasks: z.number().int(),
    updatedTaskFields: z.number().int(),
    skippedProjects: z.number().int(),
    skippedTaskSyncProjects: z.number().int(),
    errorMessage: z.string().optional().nullable(),
    project: z.unknown().optional().nullable(),
    items: z.array(z.unknown())
}).strict();

export type ProjectSyncLogInputType = z.infer<typeof ProjectSyncLogInputSchema>;
