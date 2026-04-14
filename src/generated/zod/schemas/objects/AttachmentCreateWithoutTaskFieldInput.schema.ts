import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentTypeSchema } from '../enums/AttachmentType.schema';
import { CommentCreateNestedOneWithoutAttachmentsInputObjectSchema as CommentCreateNestedOneWithoutAttachmentsInputObjectSchema } from './CommentCreateNestedOneWithoutAttachmentsInput.schema';
import { TaskEventFieldCreateNestedOneWithoutAttachmentsInputObjectSchema as TaskEventFieldCreateNestedOneWithoutAttachmentsInputObjectSchema } from './TaskEventFieldCreateNestedOneWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  type: AttachmentTypeSchema,
  createdAt: z.coerce.date().optional().nullable(),
  comment: z.lazy(() => CommentCreateNestedOneWithoutAttachmentsInputObjectSchema).optional(),
  taskEventField: z.lazy(() => TaskEventFieldCreateNestedOneWithoutAttachmentsInputObjectSchema).optional()
}).strict();
export const AttachmentCreateWithoutTaskFieldInputObjectSchema: z.ZodType<Prisma.AttachmentCreateWithoutTaskFieldInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentCreateWithoutTaskFieldInput>;
export const AttachmentCreateWithoutTaskFieldInputObjectZodSchema = makeSchema();
