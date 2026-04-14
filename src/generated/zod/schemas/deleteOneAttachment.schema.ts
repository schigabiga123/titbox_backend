import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AttachmentSelectObjectSchema as AttachmentSelectObjectSchema } from './objects/AttachmentSelect.schema';
import { AttachmentIncludeObjectSchema as AttachmentIncludeObjectSchema } from './objects/AttachmentInclude.schema';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './objects/AttachmentWhereUniqueInput.schema';

export const AttachmentDeleteOneSchema: z.ZodType<Prisma.AttachmentDeleteArgs> = z.object({ select: AttachmentSelectObjectSchema.optional(), include: AttachmentIncludeObjectSchema.optional(), where: AttachmentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AttachmentDeleteArgs>;

export const AttachmentDeleteOneZodSchema = z.object({ select: AttachmentSelectObjectSchema.optional(), include: AttachmentIncludeObjectSchema.optional(), where: AttachmentWhereUniqueInputObjectSchema }).strict();