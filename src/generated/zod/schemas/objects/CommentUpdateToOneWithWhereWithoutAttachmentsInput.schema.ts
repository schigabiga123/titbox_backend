import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentWhereInputObjectSchema as CommentWhereInputObjectSchema } from './CommentWhereInput.schema';
import { CommentUpdateWithoutAttachmentsInputObjectSchema as CommentUpdateWithoutAttachmentsInputObjectSchema } from './CommentUpdateWithoutAttachmentsInput.schema';
import { CommentUncheckedUpdateWithoutAttachmentsInputObjectSchema as CommentUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './CommentUncheckedUpdateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CommentUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => CommentUncheckedUpdateWithoutAttachmentsInputObjectSchema)])
}).strict();
export const CommentUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.CommentUpdateToOneWithWhereWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpdateToOneWithWhereWithoutAttachmentsInput>;
export const CommentUpdateToOneWithWhereWithoutAttachmentsInputObjectZodSchema = makeSchema();
