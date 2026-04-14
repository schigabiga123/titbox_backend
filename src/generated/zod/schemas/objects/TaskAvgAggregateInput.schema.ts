import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  lat: z.literal(true).optional(),
  lng: z.literal(true).optional()
}).strict();
export const TaskAvgAggregateInputObjectSchema: z.ZodType<Prisma.TaskAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TaskAvgAggregateInputType>;
export const TaskAvgAggregateInputObjectZodSchema = makeSchema();
