import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateNestedOneWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectCreateNestedOneWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectCreateNestedOneWithoutStartDeadlineReminderLogsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  sentAt: z.coerce.date().optional(),
  userId: z.string(),
  recipientRole: z.string().optional().nullable(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutStartDeadlineReminderLogsInputObjectSchema).optional()
}).strict();
export const StartDeadlineReminderLogCreateWithoutTaskInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogCreateWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogCreateWithoutTaskInput>;
export const StartDeadlineReminderLogCreateWithoutTaskInputObjectZodSchema = makeSchema();
