import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentUpdateWithoutTaskFieldInputObjectSchema as AttachmentUpdateWithoutTaskFieldInputObjectSchema } from './AttachmentUpdateWithoutTaskFieldInput.schema';
import { AttachmentUncheckedUpdateWithoutTaskFieldInputObjectSchema as AttachmentUncheckedUpdateWithoutTaskFieldInputObjectSchema } from './AttachmentUncheckedUpdateWithoutTaskFieldInput.schema';
import { AttachmentCreateWithoutTaskFieldInputObjectSchema as AttachmentCreateWithoutTaskFieldInputObjectSchema } from './AttachmentCreateWithoutTaskFieldInput.schema';
import { AttachmentUncheckedCreateWithoutTaskFieldInputObjectSchema as AttachmentUncheckedCreateWithoutTaskFieldInputObjectSchema } from './AttachmentUncheckedCreateWithoutTaskFieldInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AttachmentUpdateWithoutTaskFieldInputObjectSchema), z.lazy(() => AttachmentUncheckedUpdateWithoutTaskFieldInputObjectSchema)]),
  create: z.union([z.lazy(() => AttachmentCreateWithoutTaskFieldInputObjectSchema), z.lazy(() => AttachmentUncheckedCreateWithoutTaskFieldInputObjectSchema)])
}).strict();
export const AttachmentUpsertWithWhereUniqueWithoutTaskFieldInputObjectSchema: z.ZodType<Prisma.AttachmentUpsertWithWhereUniqueWithoutTaskFieldInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentUpsertWithWhereUniqueWithoutTaskFieldInput>;
export const AttachmentUpsertWithWhereUniqueWithoutTaskFieldInputObjectZodSchema = makeSchema();
