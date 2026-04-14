import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PortaChecklistWhereInputObjectSchema as PortaChecklistWhereInputObjectSchema } from './PortaChecklistWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => PortaChecklistWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => PortaChecklistWhereInputObjectSchema).optional().nullable()
}).strict();
export const PortaChecklistNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.PortaChecklistNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PortaChecklistNullableScalarRelationFilter>;
export const PortaChecklistNullableScalarRelationFilterObjectZodSchema = makeSchema();
