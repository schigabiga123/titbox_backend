import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const taskeventfieldscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TaskEventFieldScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TaskEventFieldScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TaskEventFieldScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TaskEventFieldScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TaskEventFieldScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  taskEventId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  data: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const TaskEventFieldScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TaskEventFieldScalarWhereWithAggregatesInput> = taskeventfieldscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TaskEventFieldScalarWhereWithAggregatesInput>;
export const TaskEventFieldScalarWhereWithAggregatesInputObjectZodSchema = taskeventfieldscalarwherewithaggregatesinputSchema;
