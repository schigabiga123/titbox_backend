import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentUpdateWithoutTaskFieldInputObjectSchema as AttachmentUpdateWithoutTaskFieldInputObjectSchema } from './AttachmentUpdateWithoutTaskFieldInput.schema';
import { AttachmentUncheckedUpdateWithoutTaskFieldInputObjectSchema as AttachmentUncheckedUpdateWithoutTaskFieldInputObjectSchema } from './AttachmentUncheckedUpdateWithoutTaskFieldInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AttachmentUpdateWithoutTaskFieldInputObjectSchema), z.lazy(() => AttachmentUncheckedUpdateWithoutTaskFieldInputObjectSchema)])
}).strict();
export const AttachmentUpdateWithWhereUniqueWithoutTaskFieldInputObjectSchema: z.ZodType<Prisma.AttachmentUpdateWithWhereUniqueWithoutTaskFieldInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentUpdateWithWhereUniqueWithoutTaskFieldInput>;
export const AttachmentUpdateWithWhereUniqueWithoutTaskFieldInputObjectZodSchema = makeSchema();
