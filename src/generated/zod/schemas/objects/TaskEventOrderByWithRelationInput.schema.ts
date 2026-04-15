import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TaskOrderByWithRelationInputObjectSchema as TaskOrderByWithRelationInputObjectSchema } from './TaskOrderByWithRelationInput.schema';
import { TaskEventFieldOrderByRelationAggregateInputObjectSchema as TaskEventFieldOrderByRelationAggregateInputObjectSchema } from './TaskEventFieldOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  task: z.lazy(() => TaskOrderByWithRelationInputObjectSchema).optional(),
  fields: z.lazy(() => TaskEventFieldOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TaskEventOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TaskEventOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventOrderByWithRelationInput>;
export const TaskEventOrderByWithRelationInputObjectZodSchema = makeSchema();
