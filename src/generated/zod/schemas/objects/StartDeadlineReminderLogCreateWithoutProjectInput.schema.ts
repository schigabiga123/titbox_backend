import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateNestedOneWithoutStartDeadlineReminderLogsInputObjectSchema as TaskCreateNestedOneWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskCreateNestedOneWithoutStartDeadlineReminderLogsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  sentAt: z.coerce.date().optional(),
  userId: z.string(),
  recipientRole: z.string().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutStartDeadlineReminderLogsInputObjectSchema)
}).strict();
export const StartDeadlineReminderLogCreateWithoutProjectInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogCreateWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogCreateWithoutProjectInput>;
export const StartDeadlineReminderLogCreateWithoutProjectInputObjectZodSchema = makeSchema();
