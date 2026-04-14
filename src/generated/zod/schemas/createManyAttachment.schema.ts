import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AttachmentCreateManyInputObjectSchema as AttachmentCreateManyInputObjectSchema } from './objects/AttachmentCreateManyInput.schema';

export const AttachmentCreateManySchema: z.ZodType<Prisma.AttachmentCreateManyArgs> = z.object({ data: z.union([ AttachmentCreateManyInputObjectSchema, z.array(AttachmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AttachmentCreateManyArgs>;

export const AttachmentCreateManyZodSchema = z.object({ data: z.union([ AttachmentCreateManyInputObjectSchema, z.array(AttachmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();