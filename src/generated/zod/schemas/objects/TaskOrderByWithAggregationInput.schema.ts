import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TaskCountOrderByAggregateInputObjectSchema as TaskCountOrderByAggregateInputObjectSchema } from './TaskCountOrderByAggregateInput.schema';
import { TaskAvgOrderByAggregateInputObjectSchema as TaskAvgOrderByAggregateInputObjectSchema } from './TaskAvgOrderByAggregateInput.schema';
import { TaskMaxOrderByAggregateInputObjectSchema as TaskMaxOrderByAggregateInputObjectSchema } from './TaskMaxOrderByAggregateInput.schema';
import { TaskMinOrderByAggregateInputObjectSchema as TaskMinOrderByAggregateInputObjectSchema } from './TaskMinOrderByAggregateInput.schema';
import { TaskSumOrderByAggregateInputObjectSchema as TaskSumOrderByAggregateInputObjectSchema } from './TaskSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  groupId: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  desc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deadline: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  startReminderSentAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  fullAddress: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lat: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lng: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isPickUp: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  accepted: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  hanging: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  assignedUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  assignedUserId2: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  submittedUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => TaskCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TaskAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TaskMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TaskMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TaskSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TaskOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TaskOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskOrderByWithAggregationInput>;
export const TaskOrderByWithAggregationInputObjectZodSchema = makeSchema();
