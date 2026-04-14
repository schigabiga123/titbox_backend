import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentCreateWithoutTaskFieldInputObjectSchema as AttachmentCreateWithoutTaskFieldInputObjectSchema } from './AttachmentCreateWithoutTaskFieldInput.schema';
import { AttachmentUncheckedCreateWithoutTaskFieldInputObjectSchema as AttachmentUncheckedCreateWithoutTaskFieldInputObjectSchema } from './AttachmentUncheckedCreateWithoutTaskFieldInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AttachmentCreateWithoutTaskFieldInputObjectSchema), z.lazy(() => AttachmentUncheckedCreateWithoutTaskFieldInputObjectSchema)])
}).strict();
export const AttachmentCreateOrConnectWithoutTaskFieldInputObjectSchema: z.ZodType<Prisma.AttachmentCreateOrConnectWithoutTaskFieldInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentCreateOrConnectWithoutTaskFieldInput>;
export const AttachmentCreateOrConnectWithoutTaskFieldInputObjectZodSchema = makeSchema();
