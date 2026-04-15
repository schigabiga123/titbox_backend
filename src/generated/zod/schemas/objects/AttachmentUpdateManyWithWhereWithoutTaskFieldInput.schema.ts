import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentScalarWhereInputObjectSchema as AttachmentScalarWhereInputObjectSchema } from './AttachmentScalarWhereInput.schema';
import { AttachmentUpdateManyMutationInputObjectSchema as AttachmentUpdateManyMutationInputObjectSchema } from './AttachmentUpdateManyMutationInput.schema';
import { AttachmentUncheckedUpdateManyWithoutTaskFieldInputObjectSchema as AttachmentUncheckedUpdateManyWithoutTaskFieldInputObjectSchema } from './AttachmentUncheckedUpdateManyWithoutTaskFieldInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttachmentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AttachmentUpdateManyMutationInputObjectSchema), z.lazy(() => AttachmentUncheckedUpdateManyWithoutTaskFieldInputObjectSchema)])
}).strict();
export const AttachmentUpdateManyWithWhereWithoutTaskFieldInputObjectSchema: z.ZodType<Prisma.AttachmentUpdateManyWithWhereWithoutTaskFieldInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentUpdateManyWithWhereWithoutTaskFieldInput>;
export const AttachmentUpdateManyWithWhereWithoutTaskFieldInputObjectZodSchema = makeSchema();
