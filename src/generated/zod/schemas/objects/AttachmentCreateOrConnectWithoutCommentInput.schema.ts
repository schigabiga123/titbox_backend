import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentCreateWithoutCommentInputObjectSchema as AttachmentCreateWithoutCommentInputObjectSchema } from './AttachmentCreateWithoutCommentInput.schema';
import { AttachmentUncheckedCreateWithoutCommentInputObjectSchema as AttachmentUncheckedCreateWithoutCommentInputObjectSchema } from './AttachmentUncheckedCreateWithoutCommentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AttachmentCreateWithoutCommentInputObjectSchema), z.lazy(() => AttachmentUncheckedCreateWithoutCommentInputObjectSchema)])
}).strict();
export const AttachmentCreateOrConnectWithoutCommentInputObjectSchema: z.ZodType<Prisma.AttachmentCreateOrConnectWithoutCommentInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentCreateOrConnectWithoutCommentInput>;
export const AttachmentCreateOrConnectWithoutCommentInputObjectZodSchema = makeSchema();
