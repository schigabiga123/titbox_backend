import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentCreateWithoutTaskEventFieldInputObjectSchema as AttachmentCreateWithoutTaskEventFieldInputObjectSchema } from './AttachmentCreateWithoutTaskEventFieldInput.schema';
import { AttachmentUncheckedCreateWithoutTaskEventFieldInputObjectSchema as AttachmentUncheckedCreateWithoutTaskEventFieldInputObjectSchema } from './AttachmentUncheckedCreateWithoutTaskEventFieldInput.schema';
import { AttachmentCreateOrConnectWithoutTaskEventFieldInputObjectSchema as AttachmentCreateOrConnectWithoutTaskEventFieldInputObjectSchema } from './AttachmentCreateOrConnectWithoutTaskEventFieldInput.schema';
import { AttachmentUpsertWithWhereUniqueWithoutTaskEventFieldInputObjectSchema as AttachmentUpsertWithWhereUniqueWithoutTaskEventFieldInputObjectSchema } from './AttachmentUpsertWithWhereUniqueWithoutTaskEventFieldInput.schema';
import { AttachmentCreateManyTaskEventFieldInputEnvelopeObjectSchema as AttachmentCreateManyTaskEventFieldInputEnvelopeObjectSchema } from './AttachmentCreateManyTaskEventFieldInputEnvelope.schema';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentUpdateWithWhereUniqueWithoutTaskEventFieldInputObjectSchema as AttachmentUpdateWithWhereUniqueWithoutTaskEventFieldInputObjectSchema } from './AttachmentUpdateWithWhereUniqueWithoutTaskEventFieldInput.schema';
import { AttachmentUpdateManyWithWhereWithoutTaskEventFieldInputObjectSchema as AttachmentUpdateManyWithWhereWithoutTaskEventFieldInputObjectSchema } from './AttachmentUpdateManyWithWhereWithoutTaskEventFieldInput.schema';
import { AttachmentScalarWhereInputObjectSchema as AttachmentScalarWhereInputObjectSchema } from './AttachmentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AttachmentCreateWithoutTaskEventFieldInputObjectSchema), z.lazy(() => AttachmentCreateWithoutTaskEventFieldInputObjectSchema).array(), z.lazy(() => AttachmentUncheckedCreateWithoutTaskEventFieldInputObjectSchema), z.lazy(() => AttachmentUncheckedCreateWithoutTaskEventFieldInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AttachmentCreateOrConnectWithoutTaskEventFieldInputObjectSchema), z.lazy(() => AttachmentCreateOrConnectWithoutTaskEventFieldInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AttachmentUpsertWithWhereUniqueWithoutTaskEventFieldInputObjectSchema), z.lazy(() => AttachmentUpsertWithWhereUniqueWithoutTaskEventFieldInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AttachmentCreateManyTaskEventFieldInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AttachmentWhereUniqueInputObjectSchema), z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AttachmentWhereUniqueInputObjectSchema), z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AttachmentWhereUniqueInputObjectSchema), z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AttachmentWhereUniqueInputObjectSchema), z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AttachmentUpdateWithWhereUniqueWithoutTaskEventFieldInputObjectSchema), z.lazy(() => AttachmentUpdateWithWhereUniqueWithoutTaskEventFieldInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AttachmentUpdateManyWithWhereWithoutTaskEventFieldInputObjectSchema), z.lazy(() => AttachmentUpdateManyWithWhereWithoutTaskEventFieldInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AttachmentScalarWhereInputObjectSchema), z.lazy(() => AttachmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AttachmentUpdateManyWithoutTaskEventFieldNestedInputObjectSchema: z.ZodType<Prisma.AttachmentUpdateManyWithoutTaskEventFieldNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentUpdateManyWithoutTaskEventFieldNestedInput>;
export const AttachmentUpdateManyWithoutTaskEventFieldNestedInputObjectZodSchema = makeSchema();
