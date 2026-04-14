import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumAttachmentTypeFilterObjectSchema as EnumAttachmentTypeFilterObjectSchema } from './EnumAttachmentTypeFilter.schema';
import { AttachmentTypeSchema } from '../enums/AttachmentType.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const attachmentscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AttachmentScalarWhereInputObjectSchema), z.lazy(() => AttachmentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AttachmentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AttachmentScalarWhereInputObjectSchema), z.lazy(() => AttachmentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumAttachmentTypeFilterObjectSchema), AttachmentTypeSchema]).optional(),
  commentId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  taskFieldId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  taskEventFieldId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const AttachmentScalarWhereInputObjectSchema: z.ZodType<Prisma.AttachmentScalarWhereInput> = attachmentscalarwhereinputSchema as unknown as z.ZodType<Prisma.AttachmentScalarWhereInput>;
export const AttachmentScalarWhereInputObjectZodSchema = attachmentscalarwhereinputSchema;
