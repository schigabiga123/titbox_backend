import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CommentTaggedUserSelectObjectSchema as CommentTaggedUserSelectObjectSchema } from './objects/CommentTaggedUserSelect.schema';
import { CommentTaggedUserIncludeObjectSchema as CommentTaggedUserIncludeObjectSchema } from './objects/CommentTaggedUserInclude.schema';
import { CommentTaggedUserUpdateInputObjectSchema as CommentTaggedUserUpdateInputObjectSchema } from './objects/CommentTaggedUserUpdateInput.schema';
import { CommentTaggedUserUncheckedUpdateInputObjectSchema as CommentTaggedUserUncheckedUpdateInputObjectSchema } from './objects/CommentTaggedUserUncheckedUpdateInput.schema';
import { CommentTaggedUserWhereUniqueInputObjectSchema as CommentTaggedUserWhereUniqueInputObjectSchema } from './objects/CommentTaggedUserWhereUniqueInput.schema';

export const CommentTaggedUserUpdateOneSchema: z.ZodType<Prisma.CommentTaggedUserUpdateArgs> = z.object({ select: CommentTaggedUserSelectObjectSchema.optional(), include: CommentTaggedUserIncludeObjectSchema.optional(), data: z.union([CommentTaggedUserUpdateInputObjectSchema, CommentTaggedUserUncheckedUpdateInputObjectSchema]), where: CommentTaggedUserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CommentTaggedUserUpdateArgs>;

export const CommentTaggedUserUpdateOneZodSchema = z.object({ select: CommentTaggedUserSelectObjectSchema.optional(), include: CommentTaggedUserIncludeObjectSchema.optional(), data: z.union([CommentTaggedUserUpdateInputObjectSchema, CommentTaggedUserUncheckedUpdateInputObjectSchema]), where: CommentTaggedUserWhereUniqueInputObjectSchema }).strict();