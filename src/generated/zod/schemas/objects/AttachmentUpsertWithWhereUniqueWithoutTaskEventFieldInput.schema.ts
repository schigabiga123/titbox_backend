import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentUpdateWithoutTaskEventFieldInputObjectSchema as AttachmentUpdateWithoutTaskEventFieldInputObjectSchema } from './AttachmentUpdateWithoutTaskEventFieldInput.schema';
import { AttachmentUncheckedUpdateWithoutTaskEventFieldInputObjectSchema as AttachmentUncheckedUpdateWithoutTaskEventFieldInputObjectSchema } from './AttachmentUncheckedUpdateWithoutTaskEventFieldInput.schema';
import { AttachmentCreateWithoutTaskEventFieldInputObjectSchema as AttachmentCreateWithoutTaskEventFieldInputObjectSchema } from './AttachmentCreateWithoutTaskEventFieldInput.schema';
import { AttachmentUncheckedCreateWithoutTaskEventFieldInputObjectSchema as AttachmentUncheckedCreateWithoutTaskEventFieldInputObjectSchema } from './AttachmentUncheckedCreateWithoutTaskEventFieldInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AttachmentUpdateWithoutTaskEventFieldInputObjectSchema), z.lazy(() => AttachmentUncheckedUpdateWithoutTaskEventFieldInputObjectSchema)]),
  create: z.union([z.lazy(() => AttachmentCreateWithoutTaskEventFieldInputObjectSchema), z.lazy(() => AttachmentUncheckedCreateWithoutTaskEventFieldInputObjectSchema)])
}).strict();
export const AttachmentUpsertWithWhereUniqueWithoutTaskEventFieldInputObjectSchema: z.ZodType<Prisma.AttachmentUpsertWithWhereUniqueWithoutTaskEventFieldInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentUpsertWithWhereUniqueWithoutTaskEventFieldInput>;
export const AttachmentUpsertWithWhereUniqueWithoutTaskEventFieldInputObjectZodSchema = makeSchema();
