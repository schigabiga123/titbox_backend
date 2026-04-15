import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentScalarWhereInputObjectSchema as AttachmentScalarWhereInputObjectSchema } from './AttachmentScalarWhereInput.schema';
import { AttachmentUpdateManyMutationInputObjectSchema as AttachmentUpdateManyMutationInputObjectSchema } from './AttachmentUpdateManyMutationInput.schema';
import { AttachmentUncheckedUpdateManyWithoutCommentInputObjectSchema as AttachmentUncheckedUpdateManyWithoutCommentInputObjectSchema } from './AttachmentUncheckedUpdateManyWithoutCommentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttachmentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AttachmentUpdateManyMutationInputObjectSchema), z.lazy(() => AttachmentUncheckedUpdateManyWithoutCommentInputObjectSchema)])
}).strict();
export const AttachmentUpdateManyWithWhereWithoutCommentInputObjectSchema: z.ZodType<Prisma.AttachmentUpdateManyWithWhereWithoutCommentInput> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentUpdateManyWithWhereWithoutCommentInput>;
export const AttachmentUpdateManyWithWhereWithoutCommentInputObjectZodSchema = makeSchema();
