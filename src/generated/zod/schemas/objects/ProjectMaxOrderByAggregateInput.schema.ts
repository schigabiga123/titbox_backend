import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  partnerName: SortOrderSchema.optional(),
  pocketId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProjectMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMaxOrderByAggregateInput>;
export const ProjectMaxOrderByAggregateInputObjectZodSchema = makeSchema();
