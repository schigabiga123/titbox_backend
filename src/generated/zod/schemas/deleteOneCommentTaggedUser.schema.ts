import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CommentTaggedUserSelectObjectSchema as CommentTaggedUserSelectObjectSchema } from './objects/CommentTaggedUserSelect.schema';
import { CommentTaggedUserIncludeObjectSchema as CommentTaggedUserIncludeObjectSchema } from './objects/CommentTaggedUserInclude.schema';
import { CommentTaggedUserWhereUniqueInputObjectSchema as CommentTaggedUserWhereUniqueInputObjectSchema } from './objects/CommentTaggedUserWhereUniqueInput.schema';

export const CommentTaggedUserDeleteOneSchema: z.ZodType<Prisma.CommentTaggedUserDeleteArgs> = z.object({ select: CommentTaggedUserSelectObjectSchema.optional(), include: CommentTaggedUserIncludeObjectSchema.optional(), where: CommentTaggedUserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CommentTaggedUserDeleteArgs>;

export const CommentTaggedUserDeleteOneZodSchema = z.object({ select: CommentTaggedUserSelectObjectSchema.optional(), include: CommentTaggedUserIncludeObjectSchema.optional(), where: CommentTaggedUserWhereUniqueInputObjectSchema }).strict();