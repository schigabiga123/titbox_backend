import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentTypeSchema } from '../enums/AttachmentType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  type: AttachmentTypeSchema,
  commentId: z.string().optional().nullable(),
  taskFieldId: z.string().optional().nullable(),
  taskEventFieldId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable()
}).strict();
export const AttachmentUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AttachmentUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentUncheckedCreateInput>;
export const AttachmentUncheckedCreateInputObjectZodSchema = makeSchema();
