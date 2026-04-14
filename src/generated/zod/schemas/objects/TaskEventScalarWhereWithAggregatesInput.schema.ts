import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const taskeventscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TaskEventScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TaskEventScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TaskEventScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TaskEventScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TaskEventScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  taskId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const TaskEventScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TaskEventScalarWhereWithAggregatesInput> = taskeventscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TaskEventScalarWhereWithAggregatesInput>;
export const TaskEventScalarWhereWithAggregatesInputObjectZodSchema = taskeventscalarwherewithaggregatesinputSchema;
