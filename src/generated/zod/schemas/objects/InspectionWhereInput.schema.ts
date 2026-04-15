import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TaskScalarRelationFilterObjectSchema as TaskScalarRelationFilterObjectSchema } from './TaskScalarRelationFilter.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema'

const inspectionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => InspectionWhereInputObjectSchema), z.lazy(() => InspectionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InspectionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InspectionWhereInputObjectSchema), z.lazy(() => InspectionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  taskId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  checked: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  note: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  data: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  task: z.union([z.lazy(() => TaskScalarRelationFilterObjectSchema), z.lazy(() => TaskWhereInputObjectSchema)]).optional()
}).strict();
export const InspectionWhereInputObjectSchema: z.ZodType<Prisma.InspectionWhereInput> = inspectionwhereinputSchema as unknown as z.ZodType<Prisma.InspectionWhereInput>;
export const InspectionWhereInputObjectZodSchema = inspectionwhereinputSchema;
