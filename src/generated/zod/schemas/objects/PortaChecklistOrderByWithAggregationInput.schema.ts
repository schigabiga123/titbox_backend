import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PortaChecklistCountOrderByAggregateInputObjectSchema as PortaChecklistCountOrderByAggregateInputObjectSchema } from './PortaChecklistCountOrderByAggregateInput.schema';
import { PortaChecklistMaxOrderByAggregateInputObjectSchema as PortaChecklistMaxOrderByAggregateInputObjectSchema } from './PortaChecklistMaxOrderByAggregateInput.schema';
import { PortaChecklistMinOrderByAggregateInputObjectSchema as PortaChecklistMinOrderByAggregateInputObjectSchema } from './PortaChecklistMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  isUserChecked: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isTruckChecked: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isTrailerChecked: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isTraktorChecked: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isBioChecked: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isSzondaChecked: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isStarted: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  startedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => PortaChecklistCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PortaChecklistMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PortaChecklistMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PortaChecklistOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PortaChecklistOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PortaChecklistOrderByWithAggregationInput>;
export const PortaChecklistOrderByWithAggregationInputObjectZodSchema = makeSchema();
