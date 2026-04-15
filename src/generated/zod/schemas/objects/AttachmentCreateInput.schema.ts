import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentTypeSchema } from '../enums/AttachmentType.schema';
import { CommentCreateNestedOneWithoutAttachmentsInputObjectSchema as CommentCreateNestedOneWithoutAttachmentsInputObjectSchema } from './CommentCreateNestedOneWithoutAttachmentsInput.schema';
import { TaskFieldCreateNestedOneWithoutAttachmentsInputObjectSchema as TaskFieldCreateNestedOneWithoutAttachmentsInputObjectSchema } from './TaskFieldCreateNestedOneWithoutAttachmentsInput.schema';
import { TaskEventFieldCreateNestedOneWithoutAttachmentsInputObjectSchema as TaskEventFieldCreateNestedOneWithoutAttachmentsInputObjectSchema } from './TaskEventFieldCreateNestedOneWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  type: AttachmentTypeSchema,
  createdAt: z.coerce.date().optional().nullable(),
  comment: z.lazy(() => CommentCreateNestedOneWithoutAttachmentsInputObjectSchema).optional(),
  taskField: z.lazy(() => TaskFieldCreateNestedOneWithoutAttachmentsInputObjectSchema).optional(),
  taskEventField: z.lazy(() => TaskEventFieldCreateNestedOneWithoutAttachmentsInputObjectSchema).optional()
}).strict();
export const AttachmentCreateInputObjectSchema: z.ZodType<Prisma.AttachmentCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentCreateInput>;
export const AttachmentCreateInputObjectZodSchema = makeSchema();
