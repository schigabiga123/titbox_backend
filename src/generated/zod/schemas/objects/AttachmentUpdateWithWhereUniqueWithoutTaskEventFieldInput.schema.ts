import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentUpdateWithoutTaskEventFieldInputObjectSchema as AttachmentUpdateWithoutTaskEventFieldInputObjectSchema } from './AttachmentUpdateWithoutTaskEventFieldInput.schema';
import { AttachmentUncheckedUpdateWithoutTaskEventFieldInputObjectSchema as AttachmentUncheckedUpdateWithoutTaskEventFieldInputObjectSchema } from './AttachmentUncheckedUpdateWithoutTaskEventFieldInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AttachmentUpdateWithoutTaskEventFieldInputObjectSchema), z.lazy(() => AttachmentUncheckedUpdateWithoutTaskEventFieldInputObjectSchema)])
}).strict();
export const AttachmentUpdateWithWhereUniqueWithoutTaskEventFieldInputObjectSchema: z.ZodType<Prisma.AttachmentUpdateWithWhereUniqueWithoutTaskEventFieldInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentUpdateWithWhereUniqueWithoutTaskEventFieldInput>;
export const AttachmentUpdateWithWhereUniqueWithoutTaskEventFieldInputObjectZodSchema = makeSchema();
