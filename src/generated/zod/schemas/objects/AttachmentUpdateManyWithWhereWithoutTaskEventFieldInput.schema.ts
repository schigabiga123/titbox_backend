import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentScalarWhereInputObjectSchema as AttachmentScalarWhereInputObjectSchema } from './AttachmentScalarWhereInput.schema';
import { AttachmentUpdateManyMutationInputObjectSchema as AttachmentUpdateManyMutationInputObjectSchema } from './AttachmentUpdateManyMutationInput.schema';
import { AttachmentUncheckedUpdateManyWithoutTaskEventFieldInputObjectSchema as AttachmentUncheckedUpdateManyWithoutTaskEventFieldInputObjectSchema } from './AttachmentUncheckedUpdateManyWithoutTaskEventFieldInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttachmentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AttachmentUpdateManyMutationInputObjectSchema), z.lazy(() => AttachmentUncheckedUpdateManyWithoutTaskEventFieldInputObjectSchema)])
}).strict();
export const AttachmentUpdateManyWithWhereWithoutTaskEventFieldInputObjectSchema: z.ZodType<Prisma.AttachmentUpdateManyWithWhereWithoutTaskEventFieldInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentUpdateManyWithWhereWithoutTaskEventFieldInput>;
export const AttachmentUpdateManyWithWhereWithoutTaskEventFieldInputObjectZodSchema = makeSchema();
