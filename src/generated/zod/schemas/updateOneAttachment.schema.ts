import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AttachmentSelectObjectSchema as AttachmentSelectObjectSchema } from './objects/AttachmentSelect.schema';
import { AttachmentIncludeObjectSchema as AttachmentIncludeObjectSchema } from './objects/AttachmentInclude.schema';
import { AttachmentUpdateInputObjectSchema as AttachmentUpdateInputObjectSchema } from './objects/AttachmentUpdateInput.schema';
import { AttachmentUncheckedUpdateInputObjectSchema as AttachmentUncheckedUpdateInputObjectSchema } from './objects/AttachmentUncheckedUpdateInput.schema';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './objects/AttachmentWhereUniqueInput.schema';

export const AttachmentUpdateOneSchema: z.ZodType<Prisma.AttachmentUpdateArgs> = z.object({ select: AttachmentSelectObjectSchema.optional(), include: AttachmentIncludeObjectSchema.optional(), data: z.union([AttachmentUpdateInputObjectSchema, AttachmentUncheckedUpdateInputObjectSchema]), where: AttachmentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AttachmentUpdateArgs>;

export const AttachmentUpdateOneZodSchema = z.object({ select: AttachmentSelectObjectSchema.optional(), include: AttachmentIncludeObjectSchema.optional(), data: z.union([AttachmentUpdateInputObjectSchema, AttachmentUncheckedUpdateInputObjectSchema]), where: AttachmentWhereUniqueInputObjectSchema }).strict();