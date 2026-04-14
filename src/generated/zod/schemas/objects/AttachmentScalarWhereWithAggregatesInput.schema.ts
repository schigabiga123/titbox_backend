import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumAttachmentTypeWithAggregatesFilterObjectSchema as EnumAttachmentTypeWithAggregatesFilterObjectSchema } from './EnumAttachmentTypeWithAggregatesFilter.schema';
import { AttachmentTypeSchema } from '../enums/AttachmentType.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const attachmentscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AttachmentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AttachmentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AttachmentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AttachmentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AttachmentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumAttachmentTypeWithAggregatesFilterObjectSchema), AttachmentTypeSchema]).optional(),
  commentId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  taskFieldId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  taskEventFieldId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const AttachmentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AttachmentScalarWhereWithAggregatesInput> = attachmentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AttachmentScalarWhereWithAggregatesInput>;
export const AttachmentScalarWhereWithAggregatesInputObjectZodSchema = attachmentscalarwherewithaggregatesinputSchema;
