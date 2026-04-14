import * as z from 'zod';
export const ProjectSyncLogItemCreateResultSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  syncLogId: z.string(),
  projectId: z.string().optional(),
  pocketProjectId: z.string().optional(),
  projectTitle: z.string(),
  success: z.boolean(),
  skipped: z.boolean(),
  skippedReason: z.string().optional(),
  createdProjects: z.number().int(),
  updatedProjects: z.number().int(),
  createdTasks: z.number().int(),
  updatedTasks: z.number().int(),
  updatedTaskFields: z.number().int(),
  skippedTaskSync: z.boolean(),
  errorMessage: z.string().optional(),
  changeDetails: z.unknown().optional(),
  syncLog: z.unknown(),
  project: z.unknown().optional()
});