import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentUpdateWithoutCommentInputObjectSchema as AttachmentUpdateWithoutCommentInputObjectSchema } from './AttachmentUpdateWithoutCommentInput.schema';
import { AttachmentUncheckedUpdateWithoutCommentInputObjectSchema as AttachmentUncheckedUpdateWithoutCommentInputObjectSchema } from './AttachmentUncheckedUpdateWithoutCommentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AttachmentUpdateWithoutCommentInputObjectSchema), z.lazy(() => AttachmentUncheckedUpdateWithoutCommentInputObjectSchema)])
}).strict();
export const AttachmentUpdateWithWhereUniqueWithoutCommentInputObjectSchema: z.ZodType<Prisma.AttachmentUpdateWithWhereUniqueWithoutCommentInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentUpdateWithWhereUniqueWithoutCommentInput>;
export const AttachmentUpdateWithWhereUniqueWithoutCommentInputObjectZodSchema = makeSchema();
