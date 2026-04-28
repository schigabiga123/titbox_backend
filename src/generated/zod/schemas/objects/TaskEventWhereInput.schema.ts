import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { TaskScalarRelationFilterObjectSchema as TaskScalarRelationFilterObjectSchema } from './TaskScalarRelationFilter.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema';
import { TaskEventFieldListRelationFilterObjectSchema as TaskEventFieldListRelationFilterObjectSchema } from './TaskEventFieldListRelationFilter.schema'

const taskeventwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TaskEventWhereInputObjectSchema), z.lazy(() => TaskEventWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TaskEventWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TaskEventWhereInputObjectSchema), z.lazy(() => TaskEventWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  taskId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  task: z.union([z.lazy(() => TaskScalarRelationFilterObjectSchema), z.lazy(() => TaskWhereInputObjectSchema)]).optional(),
  fields: z.lazy(() => TaskEventFieldListRelationFilterObjectSchema).optional()
}).strict();
export const TaskEventWhereInputObjectSchema: z.ZodType<Prisma.TaskEventWhereInput> = taskeventwhereinputSchema as unknown as z.ZodType<Prisma.TaskEventWhereInput>;
export const TaskEventWhereInputObjectZodSchema = taskeventwhereinputSchema;
