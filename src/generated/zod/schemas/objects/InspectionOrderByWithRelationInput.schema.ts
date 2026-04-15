import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TaskOrderByWithRelationInputObjectSchema as TaskOrderByWithRelationInputObjectSchema } from './TaskOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  checked: SortOrderSchema.optional(),
  note: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  data: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  task: z.lazy(() => TaskOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const InspectionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.InspectionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.InspectionOrderByWithRelationInput>;
export const InspectionOrderByWithRelationInputObjectZodSchema = makeSchema();
