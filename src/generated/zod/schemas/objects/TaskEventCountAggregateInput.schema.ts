import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  taskId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TaskEventCountAggregateInputObjectSchema: z.ZodType<Prisma.TaskEventCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventCountAggregateInputType>;
export const TaskEventCountAggregateInputObjectZodSchema = makeSchema();
