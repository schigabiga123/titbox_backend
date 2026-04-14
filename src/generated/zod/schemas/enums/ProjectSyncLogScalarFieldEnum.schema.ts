import * as z from 'zod';

export const ProjectSyncLogScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'startedAt', 'finishedAt', 'success', 'runnerName', 'scheduleType', 'selectedProjectTitle', 'projectId', 'processedProjects', 'createdProjects', 'updatedProjects', 'createdTasks', 'updatedTasks', 'updatedTaskFields', 'skippedProjects', 'skippedTaskSyncProjects', 'errorMessage'])

export type ProjectSyncLogScalarFieldEnum = z.infer<typeof ProjectSyncLogScalarFieldEnumSchema>;