import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AttachmentIncludeObjectSchema as AttachmentIncludeObjectSchema } from './objects/AttachmentInclude.schema';
import { AttachmentOrderByWithRelationInputObjectSchema as AttachmentOrderByWithRelationInputObjectSchema } from './objects/AttachmentOrderByWithRelationInput.schema';
import { AttachmentWhereInputObjectSchema as AttachmentWhereInputObjectSchema } from './objects/AttachmentWhereInput.schema';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './objects/AttachmentWhereUniqueInput.schema';
import { AttachmentScalarFieldEnumSchema } from './enums/AttachmentScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AttachmentFindFirstSelectSchema: z.ZodType<Prisma.AttachmentSelect> = z.object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    type: z.boolean().optional(),
    commentId: z.boolean().optional(),
    taskFieldId: z.boolean().optional(),
    taskEventFieldId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    comment: z.boolean().optional(),
    taskField: z.boolean().optional(),
    taskEventField: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AttachmentSelect>;

export const AttachmentFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    type: z.boolean().optional(),
    commentId: z.boolean().optional(),
    taskFieldId: z.boolean().optional(),
    taskEventFieldId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    comment: z.boolean().optional(),
    taskField: z.boolean().optional(),
    taskEventField: z.boolean().optional()
  }).strict();

export const AttachmentFindFirstSchema: z.ZodType<Prisma.AttachmentFindFirstArgs> = z.object({ select: AttachmentFindFirstSelectSchema.optional(), include: AttachmentIncludeObjectSchema.optional(), orderBy: z.union([AttachmentOrderByWithRelationInputObjectSchema, AttachmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: AttachmentWhereInputObjectSchema.optional(), cursor: AttachmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AttachmentScalarFieldEnumSchema, AttachmentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AttachmentFindFirstArgs>;

export const AttachmentFindFirstZodSchema = z.object({ select: AttachmentFindFirstSelectSchema.optional(), include: AttachmentIncludeObjectSchema.optional(), orderBy: z.union([AttachmentOrderByWithRelationInputObjectSchema, AttachmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: AttachmentWhereInputObjectSchema.optional(), cursor: AttachmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AttachmentScalarFieldEnumSchema, AttachmentScalarFieldEnumSchema.array()]).optional() }).strict();