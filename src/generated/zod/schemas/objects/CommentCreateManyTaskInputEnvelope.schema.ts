import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentCreateManyTaskInputObjectSchema as CommentCreateManyTaskInputObjectSchema } from './CommentCreateManyTaskInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CommentCreateManyTaskInputObjectSchema), z.lazy(() => CommentCreateManyTaskInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CommentCreateManyTaskInputEnvelopeObjectSchema: z.ZodType<Prisma.CommentCreateManyTaskInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateManyTaskInputEnvelope>;
export const CommentCreateManyTaskInputEnvelopeObjectZodSchema = makeSchema();
