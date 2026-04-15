import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  sentAt: z.coerce.date().optional(),
  taskId: z.string(),
  userId: z.string(),
  recipientRole: z.string().optional().nullable()
}).strict();
export const StartDeadlineReminderLogCreateManyProjectInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogCreateManyProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogCreateManyProjectInput>;
export const StartDeadlineReminderLogCreateManyProjectInputObjectZodSchema = makeSchema();
