import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentCreateManyTaskEventFieldInputObjectSchema as AttachmentCreateManyTaskEventFieldInputObjectSchema } from './AttachmentCreateManyTaskEventFieldInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AttachmentCreateManyTaskEventFieldInputObjectSchema), z.lazy(() => AttachmentCreateManyTaskEventFieldInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AttachmentCreateManyTaskEventFieldInputEnvelopeObjectSchema: z.ZodType<Prisma.AttachmentCreateManyTaskEventFieldInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentCreateManyTaskEventFieldInputEnvelope>;
export const AttachmentCreateManyTaskEventFieldInputEnvelopeObjectZodSchema = makeSchema();
