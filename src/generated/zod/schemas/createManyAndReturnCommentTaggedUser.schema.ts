import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CommentTaggedUserSelectObjectSchema as CommentTaggedUserSelectObjectSchema } from './objects/CommentTaggedUserSelect.schema';
import { CommentTaggedUserCreateManyInputObjectSchema as CommentTaggedUserCreateManyInputObjectSchema } from './objects/CommentTaggedUserCreateManyInput.schema';

export const CommentTaggedUserCreateManyAndReturnSchema: z.ZodType<Prisma.CommentTaggedUserCreateManyAndReturnArgs> = z.object({ select: CommentTaggedUserSelectObjectSchema.optional(), data: z.union([ CommentTaggedUserCreateManyInputObjectSchema, z.array(CommentTaggedUserCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CommentTaggedUserCreateManyAndReturnArgs>;

export const CommentTaggedUserCreateManyAndReturnZodSchema = z.object({ select: CommentTaggedUserSelectObjectSchema.optional(), data: z.union([ CommentTaggedUserCreateManyInputObjectSchema, z.array(CommentTaggedUserCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();