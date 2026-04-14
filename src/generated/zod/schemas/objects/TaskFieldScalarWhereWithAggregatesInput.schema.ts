import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const taskfieldscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TaskFieldScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TaskFieldScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TaskFieldScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TaskFieldScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TaskFieldScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  taskId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  pocketId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  data: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const TaskFieldScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TaskFieldScalarWhereWithAggregatesInput> = taskfieldscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TaskFieldScalarWhereWithAggregatesInput>;
export const TaskFieldScalarWhereWithAggregatesInputObjectZodSchema = taskfieldscalarwherewithaggregatesinputSchema;
