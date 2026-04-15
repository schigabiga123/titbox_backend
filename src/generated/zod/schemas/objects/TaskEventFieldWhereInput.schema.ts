import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TaskEventScalarRelationFilterObjectSchema as TaskEventScalarRelationFilterObjectSchema } from './TaskEventScalarRelationFilter.schema';
import { TaskEventWhereInputObjectSchema as TaskEventWhereInputObjectSchema } from './TaskEventWhereInput.schema';
import { AttachmentListRelationFilterObjectSchema as AttachmentListRelationFilterObjectSchema } from './AttachmentListRelationFilter.schema'

const taskeventfieldwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TaskEventFieldWhereInputObjectSchema), z.lazy(() => TaskEventFieldWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TaskEventFieldWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TaskEventFieldWhereInputObjectSchema), z.lazy(() => TaskEventFieldWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  taskEventId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  data: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  taskEvent: z.union([z.lazy(() => TaskEventScalarRelationFilterObjectSchema), z.lazy(() => TaskEventWhereInputObjectSchema)]).optional(),
  attachments: z.lazy(() => AttachmentListRelationFilterObjectSchema).optional()
}).strict();
export const TaskEventFieldWhereInputObjectSchema: z.ZodType<Prisma.TaskEventFieldWhereInput> = taskeventfieldwhereinputSchema as unknown as z.ZodType<Prisma.TaskEventFieldWhereInput>;
export const TaskEventFieldWhereInputObjectZodSchema = taskeventfieldwhereinputSchema;
