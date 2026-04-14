import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentTypeSchema } from '../enums/AttachmentType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  type: AttachmentTypeSchema,
  taskFieldId: z.string().optional().nullable(),
  taskEventFieldId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable()
}).strict();
export const AttachmentCreateManyCommentInputObjectSchema: z.ZodType<Prisma.AttachmentCreateManyCommentInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentCreateManyCommentInput>;
export const AttachmentCreateManyCommentInputObjectZodSchema = makeSchema();
