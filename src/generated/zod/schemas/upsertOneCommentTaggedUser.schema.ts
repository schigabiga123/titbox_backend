import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CommentTaggedUserSelectObjectSchema as CommentTaggedUserSelectObjectSchema } from './objects/CommentTaggedUserSelect.schema';
import { CommentTaggedUserIncludeObjectSchema as CommentTaggedUserIncludeObjectSchema } from './objects/CommentTaggedUserInclude.schema';
import { CommentTaggedUserWhereUniqueInputObjectSchema as CommentTaggedUserWhereUniqueInputObjectSchema } from './objects/CommentTaggedUserWhereUniqueInput.schema';
import { CommentTaggedUserCreateInputObjectSchema as CommentTaggedUserCreateInputObjectSchema } from './objects/CommentTaggedUserCreateInput.schema';
import { CommentTaggedUserUncheckedCreateInputObjectSchema as CommentTaggedUserUncheckedCreateInputObjectSchema } from './objects/CommentTaggedUserUncheckedCreateInput.schema';
import { CommentTaggedUserUpdateInputObjectSchema as CommentTaggedUserUpdateInputObjectSchema } from './objects/CommentTaggedUserUpdateInput.schema';
import { CommentTaggedUserUncheckedUpdateInputObjectSchema as CommentTaggedUserUncheckedUpdateInputObjectSchema } from './objects/CommentTaggedUserUncheckedUpdateInput.schema';

export const CommentTaggedUserUpsertOneSchema: z.ZodType<Prisma.CommentTaggedUserUpsertArgs> = z.object({ select: CommentTaggedUserSelectObjectSchema.optional(), include: CommentTaggedUserIncludeObjectSchema.optional(), where: CommentTaggedUserWhereUniqueInputObjectSchema, create: z.union([ CommentTaggedUserCreateInputObjectSchema, CommentTaggedUserUncheckedCreateInputObjectSchema ]), update: z.union([ CommentTaggedUserUpdateInputObjectSchema, CommentTaggedUserUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CommentTaggedUserUpsertArgs>;

export const CommentTaggedUserUpsertOneZodSchema = z.object({ select: CommentTaggedUserSelectObjectSchema.optional(), include: CommentTaggedUserIncludeObjectSchema.optional(), where: CommentTaggedUserWhereUniqueInputObjectSchema, create: z.union([ CommentTaggedUserCreateInputObjectSchema, CommentTaggedUserUncheckedCreateInputObjectSchema ]), update: z.union([ CommentTaggedUserUpdateInputObjectSchema, CommentTaggedUserUncheckedUpdateInputObjectSchema ]) }).strict();