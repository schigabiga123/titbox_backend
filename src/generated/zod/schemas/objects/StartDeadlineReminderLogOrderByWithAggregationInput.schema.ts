import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StartDeadlineReminderLogCountOrderByAggregateInputObjectSchema as StartDeadlineReminderLogCountOrderByAggregateInputObjectSchema } from './StartDeadlineReminderLogCountOrderByAggregateInput.schema';
import { StartDeadlineReminderLogMaxOrderByAggregateInputObjectSchema as StartDeadlineReminderLogMaxOrderByAggregateInputObjectSchema } from './StartDeadlineReminderLogMaxOrderByAggregateInput.schema';
import { StartDeadlineReminderLogMinOrderByAggregateInputObjectSchema as StartDeadlineReminderLogMinOrderByAggregateInputObjectSchema } from './StartDeadlineReminderLogMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  sentAt: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  projectId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: SortOrderSchema.optional(),
  recipientRole: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => StartDeadlineReminderLogCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StartDeadlineReminderLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StartDeadlineReminderLogMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StartDeadlineReminderLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogOrderByWithAggregationInput>;
export const StartDeadlineReminderLogOrderByWithAggregationInputObjectZodSchema = makeSchema();
