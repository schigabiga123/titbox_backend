import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateNestedOneWithoutStartDeadlineReminderLogsInputObjectSchema as TaskCreateNestedOneWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskCreateNestedOneWithoutStartDeadlineReminderLogsInput.schema';
import { ProjectCreateNestedOneWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectCreateNestedOneWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectCreateNestedOneWithoutStartDeadlineReminderLogsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  sentAt: z.coerce.date().optional(),
  userId: z.string(),
  recipientRole: z.string().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutStartDeadlineReminderLogsInputObjectSchema),
  project: z.lazy(() => ProjectCreateNestedOneWithoutStartDeadlineReminderLogsInputObjectSchema).optional()
}).strict();
export const StartDeadlineReminderLogCreateInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogCreateInput>;
export const StartDeadlineReminderLogCreateInputObjectZodSchema = makeSchema();
