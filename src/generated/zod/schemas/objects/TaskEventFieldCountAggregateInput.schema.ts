import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  taskEventId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  data: z.literal(true).optional(),
  type: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TaskEventFieldCountAggregateInputObjectSchema: z.ZodType<Prisma.TaskEventFieldCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldCountAggregateInputType>;
export const TaskEventFieldCountAggregateInputObjectZodSchema = makeSchema();
