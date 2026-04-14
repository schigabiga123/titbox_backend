import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentWhereInputObjectSchema as CommentWhereInputObjectSchema } from './CommentWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CommentWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CommentWhereInputObjectSchema).optional()
}).strict();
export const CommentScalarRelationFilterObjectSchema: z.ZodType<Prisma.CommentScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CommentScalarRelationFilter>;
export const CommentScalarRelationFilterObjectZodSchema = makeSchema();
