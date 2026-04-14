import * as z from 'zod';
export const ProjectSyncLogFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  createdAt: z.date(),
  startedAt: z.date(),
  finishedAt: z.date(),
  success: z.boolean(),
  runnerName: z.string(),
  scheduleType: z.string(),
  selectedProjectTitle: z.string().optional(),
  projectId: z.string().optional(),
  processedProjects: z.number().int(),
  createdProjects: z.number().int(),
  updatedProjects: z.number().int(),
  createdTasks: z.number().int(),
  updatedTasks: z.number().int(),
  updatedTaskFields: z.number().int(),
  skippedProjects: z.number().int(),
  skippedTaskSyncProjects: z.number().int(),
  errorMessage: z.string().optional(),
  project: z.unknown().optional(),
  items: z.array(z.unknown())
}));