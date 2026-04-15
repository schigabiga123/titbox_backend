import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const taskeventscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TaskEventScalarWhereInputObjectSchema), z.lazy(() => TaskEventScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TaskEventScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TaskEventScalarWhereInputObjectSchema), z.lazy(() => TaskEventScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  taskId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const TaskEventScalarWhereInputObjectSchema: z.ZodType<Prisma.TaskEventScalarWhereInput> = taskeventscalarwhereinputSchema as unknown as z.ZodType<Prisma.TaskEventScalarWhereInput>;
export const TaskEventScalarWhereInputObjectZodSchema = taskeventscalarwhereinputSchema;
