import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  sentAt: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  recipientRole: SortOrderSchema.optional()
}).strict();
export const StartDeadlineReminderLogMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogMaxOrderByAggregateInput>;
export const StartDeadlineReminderLogMaxOrderByAggregateInputObjectZodSchema = makeSchema();
