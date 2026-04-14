import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CommentTaggedUserUpdateManyMutationInputObjectSchema as CommentTaggedUserUpdateManyMutationInputObjectSchema } from './objects/CommentTaggedUserUpdateManyMutationInput.schema';
import { CommentTaggedUserWhereInputObjectSchema as CommentTaggedUserWhereInputObjectSchema } from './objects/CommentTaggedUserWhereInput.schema';

export const CommentTaggedUserUpdateManySchema: z.ZodType<Prisma.CommentTaggedUserUpdateManyArgs> = z.object({ data: CommentTaggedUserUpdateManyMutationInputObjectSchema, where: CommentTaggedUserWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CommentTaggedUserUpdateManyArgs>;

export const CommentTaggedUserUpdateManyZodSchema = z.object({ data: CommentTaggedUserUpdateManyMutationInputObjectSchema, where: CommentTaggedUserWhereInputObjectSchema.optional() }).strict();