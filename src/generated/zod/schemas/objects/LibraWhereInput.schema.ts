import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { TaskScalarRelationFilterObjectSchema as TaskScalarRelationFilterObjectSchema } from './TaskScalarRelationFilter.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema';
import { TaskFieldNullableScalarRelationFilterObjectSchema as TaskFieldNullableScalarRelationFilterObjectSchema } from './TaskFieldNullableScalarRelationFilter.schema';
import { TaskFieldWhereInputObjectSchema as TaskFieldWhereInputObjectSchema } from './TaskFieldWhereInput.schema'

const librawhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LibraWhereInputObjectSchema), z.lazy(() => LibraWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LibraWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LibraWhereInputObjectSchema), z.lazy(() => LibraWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  projectId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  taskId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  szfCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  plateNumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  assignedUserId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  amount: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  manuallyLibra: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  manuallyLibraComment: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  taskFieldId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  task: z.union([z.lazy(() => TaskScalarRelationFilterObjectSchema), z.lazy(() => TaskWhereInputObjectSchema)]).optional(),
  taskField: z.union([z.lazy(() => TaskFieldNullableScalarRelationFilterObjectSchema), z.lazy(() => TaskFieldWhereInputObjectSchema)]).optional()
}).strict();
export const LibraWhereInputObjectSchema: z.ZodType<Prisma.LibraWhereInput> = librawhereinputSchema as unknown as z.ZodType<Prisma.LibraWhereInput>;
export const LibraWhereInputObjectZodSchema = librawhereinputSchema;
