import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  sentAt: z.coerce.date().optional(),
  projectId: z.string().optional().nullable(),
  userId: z.string(),
  recipientRole: z.string().optional().nullable()
}).strict();
export const StartDeadlineReminderLogUncheckedCreateWithoutTaskInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogUncheckedCreateWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogUncheckedCreateWithoutTaskInput>;
export const StartDeadlineReminderLogUncheckedCreateWithoutTaskInputObjectZodSchema = makeSchema();
