import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentCreateWithoutTaskFieldInputObjectSchema as AttachmentCreateWithoutTaskFieldInputObjectSchema } from './AttachmentCreateWithoutTaskFieldInput.schema';
import { AttachmentUncheckedCreateWithoutTaskFieldInputObjectSchema as AttachmentUncheckedCreateWithoutTaskFieldInputObjectSchema } from './AttachmentUncheckedCreateWithoutTaskFieldInput.schema';
import { AttachmentCreateOrConnectWithoutTaskFieldInputObjectSchema as AttachmentCreateOrConnectWithoutTaskFieldInputObjectSchema } from './AttachmentCreateOrConnectWithoutTaskFieldInput.schema';
import { AttachmentUpsertWithWhereUniqueWithoutTaskFieldInputObjectSchema as AttachmentUpsertWithWhereUniqueWithoutTaskFieldInputObjectSchema } from './AttachmentUpsertWithWhereUniqueWithoutTaskFieldInput.schema';
import { AttachmentCreateManyTaskFieldInputEnvelopeObjectSchema as AttachmentCreateManyTaskFieldInputEnvelopeObjectSchema } from './AttachmentCreateManyTaskFieldInputEnvelope.schema';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentUpdateWithWhereUniqueWithoutTaskFieldInputObjectSchema as AttachmentUpdateWithWhereUniqueWithoutTaskFieldInputObjectSchema } from './AttachmentUpdateWithWhereUniqueWithoutTaskFieldInput.schema';
import { AttachmentUpdateManyWithWhereWithoutTaskFieldInputObjectSchema as AttachmentUpdateManyWithWhereWithoutTaskFieldInputObjectSchema } from './AttachmentUpdateManyWithWhereWithoutTaskFieldInput.schema';
import { AttachmentScalarWhereInputObjectSchema as AttachmentScalarWhereInputObjectSchema } from './AttachmentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AttachmentCreateWithoutTaskFieldInputObjectSchema), z.lazy(() => AttachmentCreateWithoutTaskFieldInputObjectSchema).array(), z.lazy(() => AttachmentUncheckedCreateWithoutTaskFieldInputObjectSchema), z.lazy(() => AttachmentUncheckedCreateWithoutTaskFieldInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AttachmentCreateOrConnectWithoutTaskFieldInputObjectSchema), z.lazy(() => AttachmentCreateOrConnectWithoutTaskFieldInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AttachmentUpsertWithWhereUniqueWithoutTaskFieldInputObjectSchema), z.lazy(() => AttachmentUpsertWithWhereUniqueWithoutTaskFieldInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AttachmentCreateManyTaskFieldInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AttachmentWhereUniqueInputObjectSchema), z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AttachmentWhereUniqueInputObjectSchema), z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AttachmentWhereUniqueInputObjectSchema), z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AttachmentWhereUniqueInputObjectSchema), z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AttachmentUpdateWithWhereUniqueWithoutTaskFieldInputObjectSchema), z.lazy(() => AttachmentUpdateWithWhereUniqueWithoutTaskFieldInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AttachmentUpdateManyWithWhereWithoutTaskFieldInputObjectSchema), z.lazy(() => AttachmentUpdateManyWithWhereWithoutTaskFieldInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AttachmentScalarWhereInputObjectSchema), z.lazy(() => AttachmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AttachmentUpdateManyWithoutTaskFieldNestedInputObjectSchema: z.ZodType<Prisma.AttachmentUpdateManyWithoutTaskFieldNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentUpdateManyWithoutTaskFieldNestedInput>;
export const AttachmentUpdateManyWithoutTaskFieldNestedInputObjectZodSchema = makeSchema();
