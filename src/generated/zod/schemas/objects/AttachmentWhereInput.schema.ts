import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumAttachmentTypeFilterObjectSchema as EnumAttachmentTypeFilterObjectSchema } from './EnumAttachmentTypeFilter.schema';
import { AttachmentTypeSchema } from '../enums/AttachmentType.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { CommentNullableScalarRelationFilterObjectSchema as CommentNullableScalarRelationFilterObjectSchema } from './CommentNullableScalarRelationFilter.schema';
import { CommentWhereInputObjectSchema as CommentWhereInputObjectSchema } from './CommentWhereInput.schema';
import { TaskFieldNullableScalarRelationFilterObjectSchema as TaskFieldNullableScalarRelationFilterObjectSchema } from './TaskFieldNullableScalarRelationFilter.schema';
import { TaskFieldWhereInputObjectSchema as TaskFieldWhereInputObjectSchema } from './TaskFieldWhereInput.schema';
import { TaskEventFieldNullableScalarRelationFilterObjectSchema as TaskEventFieldNullableScalarRelationFilterObjectSchema } from './TaskEventFieldNullableScalarRelationFilter.schema';
import { TaskEventFieldWhereInputObjectSchema as TaskEventFieldWhereInputObjectSchema } from './TaskEventFieldWhereInput.schema'

const attachmentwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AttachmentWhereInputObjectSchema), z.lazy(() => AttachmentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AttachmentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AttachmentWhereInputObjectSchema), z.lazy(() => AttachmentWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumAttachmentTypeFilterObjectSchema), AttachmentTypeSchema]).optional(),
  commentId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  taskFieldId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  taskEventFieldId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  comment: z.union([z.lazy(() => CommentNullableScalarRelationFilterObjectSchema), z.lazy(() => CommentWhereInputObjectSchema)]).optional(),
  taskField: z.union([z.lazy(() => TaskFieldNullableScalarRelationFilterObjectSchema), z.lazy(() => TaskFieldWhereInputObjectSchema)]).optional(),
  taskEventField: z.union([z.lazy(() => TaskEventFieldNullableScalarRelationFilterObjectSchema), z.lazy(() => TaskEventFieldWhereInputObjectSchema)]).optional()
}).strict();
export const AttachmentWhereInputObjectSchema: z.ZodType<Prisma.AttachmentWhereInput> = attachmentwhereinputSchema as unknown as z.ZodType<Prisma.AttachmentWhereInput>;
export const AttachmentWhereInputObjectZodSchema = attachmentwhereinputSchema;
