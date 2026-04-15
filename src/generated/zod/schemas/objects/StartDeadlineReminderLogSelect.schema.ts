import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskArgsObjectSchema as TaskArgsObjectSchema } from './TaskArgs.schema';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  sentAt: z.boolean().optional(),
  taskId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  userId: z.boolean().optional(),
  recipientRole: z.boolean().optional(),
  task: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional(),
  project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional()
}).strict();
export const StartDeadlineReminderLogSelectObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogSelect>;
export const StartDeadlineReminderLogSelectObjectZodSchema = makeSchema();
