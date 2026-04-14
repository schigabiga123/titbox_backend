import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  checked: SortOrderSchema.optional(),
  note: SortOrderSchema.optional(),
  data: SortOrderSchema.optional()
}).strict();
export const InspectionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InspectionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InspectionMinOrderByAggregateInput>;
export const InspectionMinOrderByAggregateInputObjectZodSchema = makeSchema();
