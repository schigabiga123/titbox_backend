import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CommentTaggedUserIncludeObjectSchema as CommentTaggedUserIncludeObjectSchema } from './objects/CommentTaggedUserInclude.schema';
import { CommentTaggedUserOrderByWithRelationInputObjectSchema as CommentTaggedUserOrderByWithRelationInputObjectSchema } from './objects/CommentTaggedUserOrderByWithRelationInput.schema';
import { CommentTaggedUserWhereInputObjectSchema as CommentTaggedUserWhereInputObjectSchema } from './objects/CommentTaggedUserWhereInput.schema';
import { CommentTaggedUserWhereUniqueInputObjectSchema as CommentTaggedUserWhereUniqueInputObjectSchema } from './objects/CommentTaggedUserWhereUniqueInput.schema';
import { CommentTaggedUserScalarFieldEnumSchema } from './enums/CommentTaggedUserScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CommentTaggedUserFindFirstSelectSchema: z.ZodType<Prisma.CommentTaggedUserSelect> = z.object({
    commentId: z.boolean().optional(),
    userId: z.boolean().optional(),
    comment: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CommentTaggedUserSelect>;

export const CommentTaggedUserFindFirstSelectZodSchema = z.object({
    commentId: z.boolean().optional(),
    userId: z.boolean().optional(),
    comment: z.boolean().optional()
  }).strict();

export const CommentTaggedUserFindFirstSchema: z.ZodType<Prisma.CommentTaggedUserFindFirstArgs> = z.object({ select: CommentTaggedUserFindFirstSelectSchema.optional(), include: CommentTaggedUserIncludeObjectSchema.optional(), orderBy: z.union([CommentTaggedUserOrderByWithRelationInputObjectSchema, CommentTaggedUserOrderByWithRelationInputObjectSchema.array()]).optional(), where: CommentTaggedUserWhereInputObjectSchema.optional(), cursor: CommentTaggedUserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CommentTaggedUserScalarFieldEnumSchema, CommentTaggedUserScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CommentTaggedUserFindFirstArgs>;

export const CommentTaggedUserFindFirstZodSchema = z.object({ select: CommentTaggedUserFindFirstSelectSchema.optional(), include: CommentTaggedUserIncludeObjectSchema.optional(), orderBy: z.union([CommentTaggedUserOrderByWithRelationInputObjectSchema, CommentTaggedUserOrderByWithRelationInputObjectSchema.array()]).optional(), where: CommentTaggedUserWhereInputObjectSchema.optional(), cursor: CommentTaggedUserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CommentTaggedUserScalarFieldEnumSchema, CommentTaggedUserScalarFieldEnumSchema.array()]).optional() }).strict();