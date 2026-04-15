import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentCreateWithoutCommentInputObjectSchema as AttachmentCreateWithoutCommentInputObjectSchema } from './AttachmentCreateWithoutCommentInput.schema';
import { AttachmentUncheckedCreateWithoutCommentInputObjectSchema as AttachmentUncheckedCreateWithoutCommentInputObjectSchema } from './AttachmentUncheckedCreateWithoutCommentInput.schema';
import { AttachmentCreateOrConnectWithoutCommentInputObjectSchema as AttachmentCreateOrConnectWithoutCommentInputObjectSchema } from './AttachmentCreateOrConnectWithoutCommentInput.schema';
import { AttachmentUpsertWithWhereUniqueWithoutCommentInputObjectSchema as AttachmentUpsertWithWhereUniqueWithoutCommentInputObjectSchema } from './AttachmentUpsertWithWhereUniqueWithoutCommentInput.schema';
import { AttachmentCreateManyCommentInputEnvelopeObjectSchema as AttachmentCreateManyCommentInputEnvelopeObjectSchema } from './AttachmentCreateManyCommentInputEnvelope.schema';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentUpdateWithWhereUniqueWithoutCommentInputObjectSchema as AttachmentUpdateWithWhereUniqueWithoutCommentInputObjectSchema } from './AttachmentUpdateWithWhereUniqueWithoutCommentInput.schema';
import { AttachmentUpdateManyWithWhereWithoutCommentInputObjectSchema as AttachmentUpdateManyWithWhereWithoutCommentInputObjectSchema } from './AttachmentUpdateManyWithWhereWithoutCommentInput.schema';
import { AttachmentScalarWhereInputObjectSchema as AttachmentScalarWhereInputObjectSchema } from './AttachmentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AttachmentCreateWithoutCommentInputObjectSchema), z.lazy(() => AttachmentCreateWithoutCommentInputObjectSchema).array(), z.lazy(() => AttachmentUncheckedCreateWithoutCommentInputObjectSchema), z.lazy(() => AttachmentUncheckedCreateWithoutCommentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AttachmentCreateOrConnectWithoutCommentInputObjectSchema), z.lazy(() => AttachmentCreateOrConnectWithoutCommentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AttachmentUpsertWithWhereUniqueWithoutCommentInputObjectSchema), z.lazy(() => AttachmentUpsertWithWhereUniqueWithoutCommentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AttachmentCreateManyCommentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AttachmentWhereUniqueInputObjectSchema), z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AttachmentWhereUniqueInputObjectSchema), z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AttachmentWhereUniqueInputObjectSchema), z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AttachmentWhereUniqueInputObjectSchema), z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AttachmentUpdateWithWhereUniqueWithoutCommentInputObjectSchema), z.lazy(() => AttachmentUpdateWithWhereUniqueWithoutCommentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AttachmentUpdateManyWithWhereWithoutCommentInputObjectSchema), z.lazy(() => AttachmentUpdateManyWithWhereWithoutCommentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AttachmentScalarWhereInputObjectSchema), z.lazy(() => AttachmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AttachmentUpdateManyWithoutCommentNestedInputObjectSchema: z.ZodType<Prisma.AttachmentUpdateManyWithoutCommentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentUpdateManyWithoutCommentNestedInput>;
export const AttachmentUpdateManyWithoutCommentNestedInputObjectZodSchema = makeSchema();
