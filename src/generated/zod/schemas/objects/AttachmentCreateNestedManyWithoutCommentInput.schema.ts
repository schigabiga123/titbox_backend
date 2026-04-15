import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentCreateWithoutCommentInputObjectSchema as AttachmentCreateWithoutCommentInputObjectSchema } from './AttachmentCreateWithoutCommentInput.schema';
import { AttachmentUncheckedCreateWithoutCommentInputObjectSchema as AttachmentUncheckedCreateWithoutCommentInputObjectSchema } from './AttachmentUncheckedCreateWithoutCommentInput.schema';
import { AttachmentCreateOrConnectWithoutCommentInputObjectSchema as AttachmentCreateOrConnectWithoutCommentInputObjectSchema } from './AttachmentCreateOrConnectWithoutCommentInput.schema';
import { AttachmentCreateManyCommentInputEnvelopeObjectSchema as AttachmentCreateManyCommentInputEnvelopeObjectSchema } from './AttachmentCreateManyCommentInputEnvelope.schema';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AttachmentCreateWithoutCommentInputObjectSchema), z.lazy(() => AttachmentCreateWithoutCommentInputObjectSchema).array(), z.lazy(() => AttachmentUncheckedCreateWithoutCommentInputObjectSchema), z.lazy(() => AttachmentUncheckedCreateWithoutCommentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AttachmentCreateOrConnectWithoutCommentInputObjectSchema), z.lazy(() => AttachmentCreateOrConnectWithoutCommentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AttachmentCreateManyCommentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AttachmentWhereUniqueInputObjectSchema), z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AttachmentCreateNestedManyWithoutCommentInputObjectSchema: z.ZodType<Prisma.AttachmentCreateNestedManyWithoutCommentInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentCreateNestedManyWithoutCommentInput>;
export const AttachmentCreateNestedManyWithoutCommentInputObjectZodSchema = makeSchema();
