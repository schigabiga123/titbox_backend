import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CommentTaggedUserCreateManyInputObjectSchema as CommentTaggedUserCreateManyInputObjectSchema } from './objects/CommentTaggedUserCreateManyInput.schema';

export const CommentTaggedUserCreateManySchema: z.ZodType<Prisma.CommentTaggedUserCreateManyArgs> = z.object({ data: z.union([ CommentTaggedUserCreateManyInputObjectSchema, z.array(CommentTaggedUserCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CommentTaggedUserCreateManyArgs>;

export const CommentTaggedUserCreateManyZodSchema = z.object({ data: z.union([ CommentTaggedUserCreateManyInputObjectSchema, z.array(CommentTaggedUserCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();