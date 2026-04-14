import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CommentTaggedUserSelectObjectSchema as CommentTaggedUserSelectObjectSchema } from './objects/CommentTaggedUserSelect.schema';
import { CommentTaggedUserIncludeObjectSchema as CommentTaggedUserIncludeObjectSchema } from './objects/CommentTaggedUserInclude.schema';
import { CommentTaggedUserWhereUniqueInputObjectSchema as CommentTaggedUserWhereUniqueInputObjectSchema } from './objects/CommentTaggedUserWhereUniqueInput.schema';

export const CommentTaggedUserFindUniqueOrThrowSchema: z.ZodType<Prisma.CommentTaggedUserFindUniqueOrThrowArgs> = z.object({ select: CommentTaggedUserSelectObjectSchema.optional(), include: CommentTaggedUserIncludeObjectSchema.optional(), where: CommentTaggedUserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CommentTaggedUserFindUniqueOrThrowArgs>;

export const CommentTaggedUserFindUniqueOrThrowZodSchema = z.object({ select: CommentTaggedUserSelectObjectSchema.optional(), include: CommentTaggedUserIncludeObjectSchema.optional(), where: CommentTaggedUserWhereUniqueInputObjectSchema }).strict();