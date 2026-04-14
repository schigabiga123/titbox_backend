import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CommentTaggedUserWhereInputObjectSchema as CommentTaggedUserWhereInputObjectSchema } from './objects/CommentTaggedUserWhereInput.schema';

export const CommentTaggedUserDeleteManySchema: z.ZodType<Prisma.CommentTaggedUserDeleteManyArgs> = z.object({ where: CommentTaggedUserWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CommentTaggedUserDeleteManyArgs>;

export const CommentTaggedUserDeleteManyZodSchema = z.object({ where: CommentTaggedUserWhereInputObjectSchema.optional() }).strict();