import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  szfCode: SortOrderSchema.optional(),
  plateNumber: SortOrderSchema.optional(),
  assignedUserId: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  manuallyLibra: SortOrderSchema.optional(),
  manuallyLibraComment: SortOrderSchema.optional(),
  taskFieldId: SortOrderSchema.optional()
}).strict();
export const LibraMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LibraMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraMaxOrderByAggregateInput>;
export const LibraMaxOrderByAggregateInputObjectZodSchema = makeSchema();
