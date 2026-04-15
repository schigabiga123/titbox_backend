import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  sentAt: z.coerce.date().optional(),
  taskId: z.string(),
  projectId: z.string().optional().nullable(),
  userId: z.string(),
  recipientRole: z.string().optional().nullable()
}).strict();
export const StartDeadlineReminderLogCreateManyInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogCreateManyInput>;
export const StartDeadlineReminderLogCreateManyInputObjectZodSchema = makeSchema();
