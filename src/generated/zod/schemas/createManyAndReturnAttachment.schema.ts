import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AttachmentSelectObjectSchema as AttachmentSelectObjectSchema } from './objects/AttachmentSelect.schema';
import { AttachmentCreateManyInputObjectSchema as AttachmentCreateManyInputObjectSchema } from './objects/AttachmentCreateManyInput.schema';

export const AttachmentCreateManyAndReturnSchema: z.ZodType<Prisma.AttachmentCreateManyAndReturnArgs> = z.object({ select: AttachmentSelectObjectSchema.optional(), data: z.union([ AttachmentCreateManyInputObjectSchema, z.array(AttachmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AttachmentCreateManyAndReturnArgs>;

export const AttachmentCreateManyAndReturnZodSchema = z.object({ select: AttachmentSelectObjectSchema.optional(), data: z.union([ AttachmentCreateManyInputObjectSchema, z.array(AttachmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();