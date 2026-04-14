import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AttachmentUpdateManyMutationInputObjectSchema as AttachmentUpdateManyMutationInputObjectSchema } from './objects/AttachmentUpdateManyMutationInput.schema';
import { AttachmentWhereInputObjectSchema as AttachmentWhereInputObjectSchema } from './objects/AttachmentWhereInput.schema';

export const AttachmentUpdateManySchema: z.ZodType<Prisma.AttachmentUpdateManyArgs> = z.object({ data: AttachmentUpdateManyMutationInputObjectSchema, where: AttachmentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AttachmentUpdateManyArgs>;

export const AttachmentUpdateManyZodSchema = z.object({ data: AttachmentUpdateManyMutationInputObjectSchema, where: AttachmentWhereInputObjectSchema.optional() }).strict();