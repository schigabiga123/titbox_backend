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
export const InspectionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InspectionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InspectionCountOrderByAggregateInput>;
export const InspectionCountOrderByAggregateInputObjectZodSchema = makeSchema();
