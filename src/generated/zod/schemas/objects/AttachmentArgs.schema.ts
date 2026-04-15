import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentSelectObjectSchema as AttachmentSelectObjectSchema } from './AttachmentSelect.schema';
import { AttachmentIncludeObjectSchema as AttachmentIncludeObjectSchema } from './AttachmentInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AttachmentSelectObjectSchema).optional(),
  include: z.lazy(() => AttachmentIncludeObjectSchema).optional()
}).strict();
export const AttachmentArgsObjectSchema = makeSchema();
export const AttachmentArgsObjectZodSchema = makeSchema();
