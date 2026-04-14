import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LibraCountOrderByAggregateInputObjectSchema as LibraCountOrderByAggregateInputObjectSchema } from './LibraCountOrderByAggregateInput.schema';
import { LibraAvgOrderByAggregateInputObjectSchema as LibraAvgOrderByAggregateInputObjectSchema } from './LibraAvgOrderByAggregateInput.schema';
import { LibraMaxOrderByAggregateInputObjectSchema as LibraMaxOrderByAggregateInputObjectSchema } from './LibraMaxOrderByAggregateInput.schema';
import { LibraMinOrderByAggregateInputObjectSchema as LibraMinOrderByAggregateInputObjectSchema } from './LibraMinOrderByAggregateInput.schema';
import { LibraSumOrderByAggregateInputObjectSchema as LibraSumOrderByAggregateInputObjectSchema } from './LibraSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  szfCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  plateNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  assignedUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  amount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  manuallyLibra: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  manuallyLibraComment: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  taskFieldId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => LibraCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => LibraAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => LibraMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => LibraMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => LibraSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const LibraOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.LibraOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraOrderByWithAggregationInput>;
export const LibraOrderByWithAggregationInputObjectZodSchema = makeSchema();
