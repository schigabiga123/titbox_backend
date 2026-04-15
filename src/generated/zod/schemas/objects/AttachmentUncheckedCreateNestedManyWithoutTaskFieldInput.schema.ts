import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentCreateWithoutTaskFieldInputObjectSchema as AttachmentCreateWithoutTaskFieldInputObjectSchema } from './AttachmentCreateWithoutTaskFieldInput.schema';
import { AttachmentUncheckedCreateWithoutTaskFieldInputObjectSchema as AttachmentUncheckedCreateWithoutTaskFieldInputObjectSchema } from './AttachmentUncheckedCreateWithoutTaskFieldInput.schema';
import { AttachmentCreateOrConnectWithoutTaskFieldInputObjectSchema as AttachmentCreateOrConnectWithoutTaskFieldInputObjectSchema } from './AttachmentCreateOrConnectWithoutTaskFieldInput.schema';
import { AttachmentCreateManyTaskFieldInputEnvelopeObjectSchema as AttachmentCreateManyTaskFieldInputEnvelopeObjectSchema } from './AttachmentCreateManyTaskFieldInputEnvelope.schema';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AttachmentCreateWithoutTaskFieldInputObjectSchema), z.lazy(() => AttachmentCreateWithoutTaskFieldInputObjectSchema).array(), z.lazy(() => AttachmentUncheckedCreateWithoutTaskFieldInputObjectSchema), z.lazy(() => AttachmentUncheckedCreateWithoutTaskFieldInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AttachmentCreateOrConnectWithoutTaskFieldInputObjectSchema), z.lazy(() => AttachmentCreateOrConnectWithoutTaskFieldInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AttachmentCreateManyTaskFieldInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AttachmentWhereUniqueInputObjectSchema), z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AttachmentUncheckedCreateNestedManyWithoutTaskFieldInputObjectSchema: z.ZodType<Prisma.AttachmentUncheckedCreateNestedManyWithoutTaskFieldInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentUncheckedCreateNestedManyWithoutTaskFieldInput>;
export const AttachmentUncheckedCreateNestedManyWithoutTaskFieldInputObjectZodSchema = makeSchema();
