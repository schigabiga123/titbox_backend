import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const inspectionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => InspectionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InspectionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InspectionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InspectionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InspectionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  taskId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  checked: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  note: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  data: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const InspectionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.InspectionScalarWhereWithAggregatesInput> = inspectionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.InspectionScalarWhereWithAggregatesInput>;
export const InspectionScalarWhereWithAggregatesInputObjectZodSchema = inspectionscalarwherewithaggregatesinputSchema;
