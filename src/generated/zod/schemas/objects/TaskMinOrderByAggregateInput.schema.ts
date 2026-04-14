import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  groupId: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  desc: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  deadline: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  startReminderSentAt: SortOrderSchema.optional(),
  fullAddress: SortOrderSchema.optional(),
  lat: SortOrderSchema.optional(),
  lng: SortOrderSchema.optional(),
  isPickUp: SortOrderSchema.optional(),
  accepted: SortOrderSchema.optional(),
  hanging: SortOrderSchema.optional(),
  assignedUserId: SortOrderSchema.optional(),
  assignedUserId2: SortOrderSchema.optional(),
  submittedUserId: SortOrderSchema.optional()
}).strict();
export const TaskMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TaskMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskMinOrderByAggregateInput>;
export const TaskMinOrderByAggregateInputObjectZodSchema = makeSchema();
