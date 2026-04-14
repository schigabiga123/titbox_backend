import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  isUserChecked: SortOrderSchema.optional(),
  isTruckChecked: SortOrderSchema.optional(),
  isTrailerChecked: SortOrderSchema.optional(),
  isTraktorChecked: SortOrderSchema.optional(),
  isBioChecked: SortOrderSchema.optional(),
  isSzondaChecked: SortOrderSchema.optional(),
  isStarted: SortOrderSchema.optional(),
  startedAt: SortOrderSchema.optional()
}).strict();
export const PortaChecklistMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PortaChecklistMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PortaChecklistMaxOrderByAggregateInput>;
export const PortaChecklistMaxOrderByAggregateInputObjectZodSchema = makeSchema();
