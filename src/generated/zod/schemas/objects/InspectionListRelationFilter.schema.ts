import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InspectionWhereInputObjectSchema as InspectionWhereInputObjectSchema } from './InspectionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => InspectionWhereInputObjectSchema).optional(),
  some: z.lazy(() => InspectionWhereInputObjectSchema).optional(),
  none: z.lazy(() => InspectionWhereInputObjectSchema).optional()
}).strict();
export const InspectionListRelationFilterObjectSchema: z.ZodType<Prisma.InspectionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.InspectionListRelationFilter>;
export const InspectionListRelationFilterObjectZodSchema = makeSchema();
