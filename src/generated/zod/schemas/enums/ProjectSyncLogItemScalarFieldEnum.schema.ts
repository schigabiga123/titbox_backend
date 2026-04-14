import * as z from 'zod';

export const ProjectSyncLogItemScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'syncLogId', 'projectId', 'pocketProjectId', 'projectTitle', 'success', 'skipped', 'skippedReason', 'createdProjects', 'updatedProjects', 'createdTasks', 'updatedTasks', 'updatedTaskFields', 'skippedTaskSync', 'errorMessage', 'changeDetails'])

export type ProjectSyncLogItemScalarFieldEnum = z.infer<typeof ProjectSyncLogItemScalarFieldEnumSchema>;