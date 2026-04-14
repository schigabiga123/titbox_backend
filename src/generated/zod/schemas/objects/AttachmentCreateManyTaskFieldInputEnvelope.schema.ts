import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentCreateManyTaskFieldInputObjectSchema as AttachmentCreateManyTaskFieldInputObjectSchema } from './AttachmentCreateManyTaskFieldInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AttachmentCreateManyTaskFieldInputObjectSchema), z.lazy(() => AttachmentCreateManyTaskFieldInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AttachmentCreateManyTaskFieldInputEnvelopeObjectSchema: z.ZodType<Prisma.AttachmentCreateManyTaskFieldInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentCreateManyTaskFieldInputEnvelope>;
export const AttachmentCreateManyTaskFieldInputEnvelopeObjectZodSchema = makeSchema();
