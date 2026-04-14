import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraWhereInputObjectSchema as LibraWhereInputObjectSchema } from './LibraWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => LibraWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => LibraWhereInputObjectSchema).optional().nullable()
}).strict();
export const LibraNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.LibraNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.LibraNullableScalarRelationFilter>;
export const LibraNullableScalarRelationFilterObjectZodSchema = makeSchema();
