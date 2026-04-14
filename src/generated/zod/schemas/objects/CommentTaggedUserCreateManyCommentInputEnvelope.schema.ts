import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentTaggedUserCreateManyCommentInputObjectSchema as CommentTaggedUserCreateManyCommentInputObjectSchema } from './CommentTaggedUserCreateManyCommentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CommentTaggedUserCreateManyCommentInputObjectSchema), z.lazy(() => CommentTaggedUserCreateManyCommentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CommentTaggedUserCreateManyCommentInputEnvelopeObjectSchema: z.ZodType<Prisma.CommentTaggedUserCreateManyCommentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserCreateManyCommentInputEnvelope>;
export const CommentTaggedUserCreateManyCommentInputEnvelopeObjectZodSchema = makeSchema();
