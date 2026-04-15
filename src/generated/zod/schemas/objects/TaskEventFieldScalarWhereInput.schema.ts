import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const taskeventfieldscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TaskEventFieldScalarWhereInputObjectSchema), z.lazy(() => TaskEventFieldScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TaskEventFieldScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TaskEventFieldScalarWhereInputObjectSchema), z.lazy(() => TaskEventFieldScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  taskEventId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  data: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const TaskEventFieldScalarWhereInputObjectSchema: z.ZodType<Prisma.TaskEventFieldScalarWhereInput> = taskeventfieldscalarwhereinputSchema as unknown as z.ZodType<Prisma.TaskEventFieldScalarWhereInput>;
export const TaskEventFieldScalarWhereInputObjectZodSchema = taskeventfieldscalarwhereinputSchema;
