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
export const PortaChecklistCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PortaChecklistCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PortaChecklistCountOrderByAggregateInput>;
export const PortaChecklistCountOrderByAggregateInputObjectZodSchema = makeSchema();
