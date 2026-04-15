import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentUpdateWithoutCommentInputObjectSchema as AttachmentUpdateWithoutCommentInputObjectSchema } from './AttachmentUpdateWithoutCommentInput.schema';
import { AttachmentUncheckedUpdateWithoutCommentInputObjectSchema as AttachmentUncheckedUpdateWithoutCommentInputObjectSchema } from './AttachmentUncheckedUpdateWithoutCommentInput.schema';
import { AttachmentCreateWithoutCommentInputObjectSchema as AttachmentCreateWithoutCommentInputObjectSchema } from './AttachmentCreateWithoutCommentInput.schema';
import { AttachmentUncheckedCreateWithoutCommentInputObjectSchema as AttachmentUncheckedCreateWithoutCommentInputObjectSchema } from './AttachmentUncheckedCreateWithoutCommentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AttachmentUpdateWithoutCommentInputObjectSchema), z.lazy(() => AttachmentUncheckedUpdateWithoutCommentInputObjectSchema)]),
  create: z.union([z.lazy(() => AttachmentCreateWithoutCommentInputObjectSchema), z.lazy(() => AttachmentUncheckedCreateWithoutCommentInputObjectSchema)])
}).strict();
export const AttachmentUpsertWithWhereUniqueWithoutCommentInputObjectSchema: z.ZodType<Prisma.AttachmentUpsertWithWhereUniqueWithoutCommentInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentUpsertWithWhereUniqueWithoutCommentInput>;
export const AttachmentUpsertWithWhereUniqueWithoutCommentInputObjectZodSchema = makeSchema();
