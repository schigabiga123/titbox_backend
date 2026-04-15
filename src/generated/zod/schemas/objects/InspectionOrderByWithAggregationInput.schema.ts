import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InspectionCountOrderByAggregateInputObjectSchema as InspectionCountOrderByAggregateInputObjectSchema } from './InspectionCountOrderByAggregateInput.schema';
import { InspectionMaxOrderByAggregateInputObjectSchema as InspectionMaxOrderByAggregateInputObjectSchema } from './InspectionMaxOrderByAggregateInput.schema';
import { InspectionMinOrderByAggregateInputObjectSchema as InspectionMinOrderByAggregateInputObjectSchema } from './InspectionMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  checked: SortOrderSchema.optional(),
  note: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  data: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => InspectionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => InspectionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => InspectionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const InspectionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.InspectionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.InspectionOrderByWithAggregationInput>;
export const InspectionOrderByWithAggregationInputObjectZodSchema = makeSchema();
