import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentCreateWithoutAttachmentsInputObjectSchema as CommentCreateWithoutAttachmentsInputObjectSchema } from './CommentCreateWithoutAttachmentsInput.schema';
import { CommentUncheckedCreateWithoutAttachmentsInputObjectSchema as CommentUncheckedCreateWithoutAttachmentsInputObjectSchema } from './CommentUncheckedCreateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CommentCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutAttachmentsInputObjectSchema)])
}).strict();
export const CommentCreateOrConnectWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.CommentCreateOrConnectWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateOrConnectWithoutAttachmentsInput>;
export const CommentCreateOrConnectWithoutAttachmentsInputObjectZodSchema = makeSchema();
