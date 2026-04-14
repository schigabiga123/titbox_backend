import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AttachmentSelectObjectSchema as AttachmentSelectObjectSchema } from './objects/AttachmentSelect.schema';
import { AttachmentIncludeObjectSchema as AttachmentIncludeObjectSchema } from './objects/AttachmentInclude.schema';
import { AttachmentCreateInputObjectSchema as AttachmentCreateInputObjectSchema } from './objects/AttachmentCreateInput.schema';
import { AttachmentUncheckedCreateInputObjectSchema as AttachmentUncheckedCreateInputObjectSchema } from './objects/AttachmentUncheckedCreateInput.schema';

export const AttachmentCreateOneSchema: z.ZodType<Prisma.AttachmentCreateArgs> = z.object({ select: AttachmentSelectObjectSchema.optional(), include: AttachmentIncludeObjectSchema.optional(), data: z.union([AttachmentCreateInputObjectSchema, AttachmentUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AttachmentCreateArgs>;

export const AttachmentCreateOneZodSchema = z.object({ select: AttachmentSelectObjectSchema.optional(), include: AttachmentIncludeObjectSchema.optional(), data: z.union([AttachmentCreateInputObjectSchema, AttachmentUncheckedCreateInputObjectSchema]) }).strict();