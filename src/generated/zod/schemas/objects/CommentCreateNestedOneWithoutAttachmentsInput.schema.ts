import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentCreateWithoutAttachmentsInputObjectSchema as CommentCreateWithoutAttachmentsInputObjectSchema } from './CommentCreateWithoutAttachmentsInput.schema';
import { CommentUncheckedCreateWithoutAttachmentsInputObjectSchema as CommentUncheckedCreateWithoutAttachmentsInputObjectSchema } from './CommentUncheckedCreateWithoutAttachmentsInput.schema';
import { CommentCreateOrConnectWithoutAttachmentsInputObjectSchema as CommentCreateOrConnectWithoutAttachmentsInputObjectSchema } from './CommentCreateOrConnectWithoutAttachmentsInput.schema';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CommentCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutAttachmentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CommentCreateOrConnectWithoutAttachmentsInputObjectSchema).optional(),
  connect: z.lazy(() => CommentWhereUniqueInputObjectSchema).optional()
}).strict();
export const CommentCreateNestedOneWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.CommentCreateNestedOneWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateNestedOneWithoutAttachmentsInput>;
export const CommentCreateNestedOneWithoutAttachmentsInputObjectZodSchema = makeSchema();
