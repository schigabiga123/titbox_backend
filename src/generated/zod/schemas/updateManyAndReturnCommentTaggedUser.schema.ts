import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CommentTaggedUserSelectObjectSchema as CommentTaggedUserSelectObjectSchema } from './objects/CommentTaggedUserSelect.schema';
import { CommentTaggedUserUpdateManyMutationInputObjectSchema as CommentTaggedUserUpdateManyMutationInputObjectSchema } from './objects/CommentTaggedUserUpdateManyMutationInput.schema';
import { CommentTaggedUserWhereInputObjectSchema as CommentTaggedUserWhereInputObjectSchema } from './objects/CommentTaggedUserWhereInput.schema';

export const CommentTaggedUserUpdateManyAndReturnSchema: z.ZodType<Prisma.CommentTaggedUserUpdateManyAndReturnArgs> = z.object({ select: CommentTaggedUserSelectObjectSchema.optional(), data: CommentTaggedUserUpdateManyMutationInputObjectSchema, where: CommentTaggedUserWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CommentTaggedUserUpdateManyAndReturnArgs>;

export const CommentTaggedUserUpdateManyAndReturnZodSchema = z.object({ select: CommentTaggedUserSelectObjectSchema.optional(), data: CommentTaggedUserUpdateManyMutationInputObjectSchema, where: CommentTaggedUserWhereInputObjectSchema.optional() }).strict();