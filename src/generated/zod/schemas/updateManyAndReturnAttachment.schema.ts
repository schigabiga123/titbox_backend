import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AttachmentSelectObjectSchema as AttachmentSelectObjectSchema } from './objects/AttachmentSelect.schema';
import { AttachmentUpdateManyMutationInputObjectSchema as AttachmentUpdateManyMutationInputObjectSchema } from './objects/AttachmentUpdateManyMutationInput.schema';
import { AttachmentWhereInputObjectSchema as AttachmentWhereInputObjectSchema } from './objects/AttachmentWhereInput.schema';

export const AttachmentUpdateManyAndReturnSchema: z.ZodType<Prisma.AttachmentUpdateManyAndReturnArgs> = z.object({ select: AttachmentSelectObjectSchema.optional(), data: AttachmentUpdateManyMutationInputObjectSchema, where: AttachmentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AttachmentUpdateManyAndReturnArgs>;

export const AttachmentUpdateManyAndReturnZodSchema = z.object({ select: AttachmentSelectObjectSchema.optional(), data: AttachmentUpdateManyMutationInputObjectSchema, where: AttachmentWhereInputObjectSchema.optional() }).strict();