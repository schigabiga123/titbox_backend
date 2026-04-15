import * as z from 'zod';
export const ProjectUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  partnerName: z.string().optional(),
  pocketId: z.string().optional(),
  title: z.string(),
  updatedAt: z.date().optional(),
  tasks: z.array(z.unknown()),
  syncLogs: z.array(z.unknown()),
  syncLogItems: z.array(z.unknown()),
  startDeadlineReminderLogs: z.array(z.unknown())
}));