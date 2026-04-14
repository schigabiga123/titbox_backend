import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentCreateWithoutAttachmentsInputObjectSchema as CommentCreateWithoutAttachmentsInputObjectSchema } from './CommentCreateWithoutAttachmentsInput.schema';
import { CommentUncheckedCreateWithoutAttachmentsInputObjectSchema as CommentUncheckedCreateWithoutAttachmentsInputObjectSchema } from './CommentUncheckedCreateWithoutAttachmentsInput.schema';
import { CommentCreateOrConnectWithoutAttachmentsInputObjectSchema as CommentCreateOrConnectWithoutAttachmentsInputObjectSchema } from './CommentCreateOrConnectWithoutAttachmentsInput.schema';
import { CommentUpsertWithoutAttachmentsInputObjectSchema as CommentUpsertWithoutAttachmentsInputObjectSchema } from './CommentUpsertWithoutAttachmentsInput.schema';
import { CommentWhereInputObjectSchema as CommentWhereInputObjectSchema } from './CommentWhereInput.schema';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema as CommentUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema } from './CommentUpdateToOneWithWhereWithoutAttachmentsInput.schema';
import { CommentUpdateWithoutAttachmentsInputObjectSchema as CommentUpdateWithoutAttachmentsInputObjectSchema } from './CommentUpdateWithoutAttachmentsInput.schema';
import { CommentUncheckedUpdateWithoutAttachmentsInputObjectSchema as CommentUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './CommentUncheckedUpdateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CommentCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutAttachmentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CommentCreateOrConnectWithoutAttachmentsInputObjectSchema).optional(),
  upsert: z.lazy(() => CommentUpsertWithoutAttachmentsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => CommentWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => CommentWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => CommentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CommentUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema), z.lazy(() => CommentUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => CommentUncheckedUpdateWithoutAttachmentsInputObjectSchema)]).optional()
}).strict();
export const CommentUpdateOneWithoutAttachmentsNestedInputObjectSchema: z.ZodType<Prisma.CommentUpdateOneWithoutAttachmentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpdateOneWithoutAttachmentsNestedInput>;
export const CommentUpdateOneWithoutAttachmentsNestedInputObjectZodSchema = makeSchema();
