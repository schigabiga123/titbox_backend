import * as z from 'zod';
export const ProjectSyncLogItemFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});