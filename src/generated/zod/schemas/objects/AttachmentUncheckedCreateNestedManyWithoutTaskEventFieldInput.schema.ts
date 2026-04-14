import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentCreateWithoutTaskEventFieldInputObjectSchema as AttachmentCreateWithoutTaskEventFieldInputObjectSchema } from './AttachmentCreateWithoutTaskEventFieldInput.schema';
import { AttachmentUncheckedCreateWithoutTaskEventFieldInputObjectSchema as AttachmentUncheckedCreateWithoutTaskEventFieldInputObjectSchema } from './AttachmentUncheckedCreateWithoutTaskEventFieldInput.schema';
import { AttachmentCreateOrConnectWithoutTaskEventFieldInputObjectSchema as AttachmentCreateOrConnectWithoutTaskEventFieldInputObjectSchema } from './AttachmentCreateOrConnectWithoutTaskEventFieldInput.schema';
import { AttachmentCreateManyTaskEventFieldInputEnvelopeObjectSchema as AttachmentCreateManyTaskEventFieldInputEnvelopeObjectSchema } from './AttachmentCreateManyTaskEventFieldInputEnvelope.schema';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AttachmentCreateWithoutTaskEventFieldInputObjectSchema), z.lazy(() => AttachmentCreateWithoutTaskEventFieldInputObjectSchema).array(), z.lazy(() => AttachmentUncheckedCreateWithoutTaskEventFieldInputObjectSchema), z.lazy(() => AttachmentUncheckedCreateWithoutTaskEventFieldInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AttachmentCreateOrConnectWithoutTaskEventFieldInputObjectSchema), z.lazy(() => AttachmentCreateOrConnectWithoutTaskEventFieldInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AttachmentCreateManyTaskEventFieldInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AttachmentWhereUniqueInputObjectSchema), z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AttachmentUncheckedCreateNestedManyWithoutTaskEventFieldInputObjectSchema: z.ZodType<Prisma.AttachmentUncheckedCreateNestedManyWithoutTaskEventFieldInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentUncheckedCreateNestedManyWithoutTaskEventFieldInput>;
export const AttachmentUncheckedCreateNestedManyWithoutTaskEventFieldInputObjectZodSchema = makeSchema();
