import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  sentAt: z.literal(true).optional(),
  taskId: z.literal(true).optional(),
  projectId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  recipientRole: z.literal(true).optional()
}).strict();
export const StartDeadlineReminderLogMaxAggregateInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogMaxAggregateInputType>;
export const StartDeadlineReminderLogMaxAggregateInputObjectZodSchema = makeSchema();
