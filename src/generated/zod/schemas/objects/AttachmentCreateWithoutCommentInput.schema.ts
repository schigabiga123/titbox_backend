import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentTypeSchema } from '../enums/AttachmentType.schema';
import { TaskFieldCreateNestedOneWithoutAttachmentsInputObjectSchema as TaskFieldCreateNestedOneWithoutAttachmentsInputObjectSchema } from './TaskFieldCreateNestedOneWithoutAttachmentsInput.schema';
import { TaskEventFieldCreateNestedOneWithoutAttachmentsInputObjectSchema as TaskEventFieldCreateNestedOneWithoutAttachmentsInputObjectSchema } from './TaskEventFieldCreateNestedOneWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  type: AttachmentTypeSchema,
  createdAt: z.coerce.date().optional().nullable(),
  taskField: z.lazy(() => TaskFieldCreateNestedOneWithoutAttachmentsInputObjectSchema).optional(),
  taskEventField: z.lazy(() => TaskEventFieldCreateNestedOneWithoutAttachmentsInputObjectSchema).optional()
}).strict();
export const AttachmentCreateWithoutCommentInputObjectSchema: z.ZodType<Prisma.AttachmentCreateWithoutCommentInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentCreateWithoutCommentInput>;
export const AttachmentCreateWithoutCommentInputObjectZodSchema = makeSchema();
