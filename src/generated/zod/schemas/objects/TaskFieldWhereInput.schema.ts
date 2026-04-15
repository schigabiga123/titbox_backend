import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TaskScalarRelationFilterObjectSchema as TaskScalarRelationFilterObjectSchema } from './TaskScalarRelationFilter.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema';
import { AttachmentListRelationFilterObjectSchema as AttachmentListRelationFilterObjectSchema } from './AttachmentListRelationFilter.schema';
import { LibraNullableScalarRelationFilterObjectSchema as LibraNullableScalarRelationFilterObjectSchema } from './LibraNullableScalarRelationFilter.schema';
import { LibraWhereInputObjectSchema as LibraWhereInputObjectSchema } from './LibraWhereInput.schema'

const taskfieldwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TaskFieldWhereInputObjectSchema), z.lazy(() => TaskFieldWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TaskFieldWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TaskFieldWhereInputObjectSchema), z.lazy(() => TaskFieldWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  taskId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  pocketId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  data: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  task: z.union([z.lazy(() => TaskScalarRelationFilterObjectSchema), z.lazy(() => TaskWhereInputObjectSchema)]).optional(),
  attachments: z.lazy(() => AttachmentListRelationFilterObjectSchema).optional(),
  libra: z.union([z.lazy(() => LibraNullableScalarRelationFilterObjectSchema), z.lazy(() => LibraWhereInputObjectSchema)]).optional()
}).strict();
export const TaskFieldWhereInputObjectSchema: z.ZodType<Prisma.TaskFieldWhereInput> = taskfieldwhereinputSchema as unknown as z.ZodType<Prisma.TaskFieldWhereInput>;
export const TaskFieldWhereInputObjectZodSchema = taskfieldwhereinputSchema;
