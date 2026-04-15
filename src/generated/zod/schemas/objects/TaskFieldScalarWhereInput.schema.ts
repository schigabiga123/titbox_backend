import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const taskfieldscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TaskFieldScalarWhereInputObjectSchema), z.lazy(() => TaskFieldScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TaskFieldScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TaskFieldScalarWhereInputObjectSchema), z.lazy(() => TaskFieldScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  taskId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  pocketId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  data: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const TaskFieldScalarWhereInputObjectSchema: z.ZodType<Prisma.TaskFieldScalarWhereInput> = taskfieldscalarwhereinputSchema as unknown as z.ZodType<Prisma.TaskFieldScalarWhereInput>;
export const TaskFieldScalarWhereInputObjectZodSchema = taskfieldscalarwhereinputSchema;
