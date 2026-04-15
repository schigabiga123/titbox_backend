import * as z from 'zod';
export const ProjectFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  partnerName: z.string().optional(),
  pocketId: z.string().optional(),
  title: z.string(),
  updatedAt: z.date().optional(),
  tasks: z.array(z.unknown()),
  syncLogs: z.array(z.unknown()),
  syncLogItems: z.array(z.unknown()),
  startDeadlineReminderLogs: z.array(z.unknown())
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