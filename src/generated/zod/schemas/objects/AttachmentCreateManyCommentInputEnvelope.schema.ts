import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentCreateManyCommentInputObjectSchema as AttachmentCreateManyCommentInputObjectSchema } from './AttachmentCreateManyCommentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AttachmentCreateManyCommentInputObjectSchema), z.lazy(() => AttachmentCreateManyCommentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AttachmentCreateManyCommentInputEnvelopeObjectSchema: z.ZodType<Prisma.AttachmentCreateManyCommentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentCreateManyCommentInputEnvelope>;
export const AttachmentCreateManyCommentInputEnvelopeObjectZodSchema = makeSchema();
