import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AttachmentSelectObjectSchema as AttachmentSelectObjectSchema } from './objects/AttachmentSelect.schema';
import { AttachmentIncludeObjectSchema as AttachmentIncludeObjectSchema } from './objects/AttachmentInclude.schema';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './objects/AttachmentWhereUniqueInput.schema';
import { AttachmentCreateInputObjectSchema as AttachmentCreateInputObjectSchema } from './objects/AttachmentCreateInput.schema';
import { AttachmentUncheckedCreateInputObjectSchema as AttachmentUncheckedCreateInputObjectSchema } from './objects/AttachmentUncheckedCreateInput.schema';
import { AttachmentUpdateInputObjectSchema as AttachmentUpdateInputObjectSchema } from './objects/AttachmentUpdateInput.schema';
import { AttachmentUncheckedUpdateInputObjectSchema as AttachmentUncheckedUpdateInputObjectSchema } from './objects/AttachmentUncheckedUpdateInput.schema';

export const AttachmentUpsertOneSchema: z.ZodType<Prisma.AttachmentUpsertArgs> = z.object({ select: AttachmentSelectObjectSchema.optional(), include: AttachmentIncludeObjectSchema.optional(), where: AttachmentWhereUniqueInputObjectSchema, create: z.union([ AttachmentCreateInputObjectSchema, AttachmentUncheckedCreateInputObjectSchema ]), update: z.union([ AttachmentUpdateInputObjectSchema, AttachmentUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AttachmentUpsertArgs>;

export const AttachmentUpsertOneZodSchema = z.object({ select: AttachmentSelectObjectSchema.optional(), include: AttachmentIncludeObjectSchema.optional(), where: AttachmentWhereUniqueInputObjectSchema, create: z.union([ AttachmentCreateInputObjectSchema, AttachmentUncheckedCreateInputObjectSchema ]), update: z.union([ AttachmentUpdateInputObjectSchema, AttachmentUncheckedUpdateInputObjectSchema ]) }).strict();