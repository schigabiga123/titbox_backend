import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentCreateWithoutTaskEventFieldInputObjectSchema as AttachmentCreateWithoutTaskEventFieldInputObjectSchema } from './AttachmentCreateWithoutTaskEventFieldInput.schema';
import { AttachmentUncheckedCreateWithoutTaskEventFieldInputObjectSchema as AttachmentUncheckedCreateWithoutTaskEventFieldInputObjectSchema } from './AttachmentUncheckedCreateWithoutTaskEventFieldInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AttachmentCreateWithoutTaskEventFieldInputObjectSchema), z.lazy(() => AttachmentUncheckedCreateWithoutTaskEventFieldInputObjectSchema)])
}).strict();
export const AttachmentCreateOrConnectWithoutTaskEventFieldInputObjectSchema: z.ZodType<Prisma.AttachmentCreateOrConnectWithoutTaskEventFieldInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentCreateOrConnectWithoutTaskEventFieldInput>;
export const AttachmentCreateOrConnectWithoutTaskEventFieldInputObjectZodSchema = makeSchema();
