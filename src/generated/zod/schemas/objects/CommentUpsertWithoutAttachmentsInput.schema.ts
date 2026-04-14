import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentUpdateWithoutAttachmentsInputObjectSchema as CommentUpdateWithoutAttachmentsInputObjectSchema } from './CommentUpdateWithoutAttachmentsInput.schema';
import { CommentUncheckedUpdateWithoutAttachmentsInputObjectSchema as CommentUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './CommentUncheckedUpdateWithoutAttachmentsInput.schema';
import { CommentCreateWithoutAttachmentsInputObjectSchema as CommentCreateWithoutAttachmentsInputObjectSchema } from './CommentCreateWithoutAttachmentsInput.schema';
import { CommentUncheckedCreateWithoutAttachmentsInputObjectSchema as CommentUncheckedCreateWithoutAttachmentsInputObjectSchema } from './CommentUncheckedCreateWithoutAttachmentsInput.schema';
import { CommentWhereInputObjectSchema as CommentWhereInputObjectSchema } from './CommentWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CommentUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => CommentUncheckedUpdateWithoutAttachmentsInputObjectSchema)]),
  create: z.union([z.lazy(() => CommentCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutAttachmentsInputObjectSchema)]),
  where: z.lazy(() => CommentWhereInputObjectSchema).optional()
}).strict();
export const CommentUpsertWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.CommentUpsertWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpsertWithoutAttachmentsInput>;
export const CommentUpsertWithoutAttachmentsInputObjectZodSchema = makeSchema();
