import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CommentTaggedUserOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserOrderByRelationAggregateInput>;
export const CommentTaggedUserOrderByRelationAggregateInputObjectZodSchema = makeSchema();
