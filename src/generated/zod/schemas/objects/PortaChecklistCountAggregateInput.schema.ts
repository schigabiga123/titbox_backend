import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  taskId: z.literal(true).optional(),
  isUserChecked: z.literal(true).optional(),
  isTruckChecked: z.literal(true).optional(),
  isTrailerChecked: z.literal(true).optional(),
  isTraktorChecked: z.literal(true).optional(),
  isBioChecked: z.literal(true).optional(),
  isSzondaChecked: z.literal(true).optional(),
  isStarted: z.literal(true).optional(),
  startedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const PortaChecklistCountAggregateInputObjectSchema: z.ZodType<Prisma.PortaChecklistCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PortaChecklistCountAggregateInputType>;
export const PortaChecklistCountAggregateInputObjectZodSchema = makeSchema();
