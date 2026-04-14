import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AttachmentWhereInputObjectSchema as AttachmentWhereInputObjectSchema } from './objects/AttachmentWhereInput.schema';

export const AttachmentDeleteManySchema: z.ZodType<Prisma.AttachmentDeleteManyArgs> = z.object({ where: AttachmentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AttachmentDeleteManyArgs>;

export const AttachmentDeleteManyZodSchema = z.object({ where: AttachmentWhereInputObjectSchema.optional() }).strict();