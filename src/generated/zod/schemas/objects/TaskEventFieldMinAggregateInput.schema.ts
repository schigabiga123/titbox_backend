import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  taskEventId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  data: z.literal(true).optional(),
  type: z.literal(true).optional()
}).strict();
export const TaskEventFieldMinAggregateInputObjectSchema: z.ZodType<Prisma.TaskEventFieldMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldMinAggregateInputType>;
export const TaskEventFieldMinAggregateInputObjectZodSchema = makeSchema();
