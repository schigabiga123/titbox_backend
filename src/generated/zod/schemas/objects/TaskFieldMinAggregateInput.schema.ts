import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  taskId: z.literal(true).optional(),
  pocketId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  data: z.literal(true).optional(),
  type: z.literal(true).optional()
}).strict();
export const TaskFieldMinAggregateInputObjectSchema: z.ZodType<Prisma.TaskFieldMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldMinAggregateInputType>;
export const TaskFieldMinAggregateInputObjectZodSchema = makeSchema();
