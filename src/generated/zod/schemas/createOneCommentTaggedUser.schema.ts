import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CommentTaggedUserSelectObjectSchema as CommentTaggedUserSelectObjectSchema } from './objects/CommentTaggedUserSelect.schema';
import { CommentTaggedUserIncludeObjectSchema as CommentTaggedUserIncludeObjectSchema } from './objects/CommentTaggedUserInclude.schema';
import { CommentTaggedUserCreateInputObjectSchema as CommentTaggedUserCreateInputObjectSchema } from './objects/CommentTaggedUserCreateInput.schema';
import { CommentTaggedUserUncheckedCreateInputObjectSchema as CommentTaggedUserUncheckedCreateInputObjectSchema } from './objects/CommentTaggedUserUncheckedCreateInput.schema';

export const CommentTaggedUserCreateOneSchema: z.ZodType<Prisma.CommentTaggedUserCreateArgs> = z.object({ select: CommentTaggedUserSelectObjectSchema.optional(), include: CommentTaggedUserIncludeObjectSchema.optional(), data: z.union([CommentTaggedUserCreateInputObjectSchema, CommentTaggedUserUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CommentTaggedUserCreateArgs>;

export const CommentTaggedUserCreateOneZodSchema = z.object({ select: CommentTaggedUserSelectObjectSchema.optional(), include: CommentTaggedUserIncludeObjectSchema.optional(), data: z.union([CommentTaggedUserCreateInputObjectSchema, CommentTaggedUserUncheckedCreateInputObjectSchema]) }).strict();