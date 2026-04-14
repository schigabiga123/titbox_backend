import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  taskId: z.literal(true).optional(),
  key: z.literal(true).optional(),
  checked: z.literal(true).optional(),
  note: z.literal(true).optional(),
  data: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const InspectionCountAggregateInputObjectSchema: z.ZodType<Prisma.InspectionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InspectionCountAggregateInputType>;
export const InspectionCountAggregateInputObjectZodSchema = makeSchema();
