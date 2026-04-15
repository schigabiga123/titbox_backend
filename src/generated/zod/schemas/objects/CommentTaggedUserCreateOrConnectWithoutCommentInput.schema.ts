import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentTaggedUserWhereUniqueInputObjectSchema as CommentTaggedUserWhereUniqueInputObjectSchema } from './CommentTaggedUserWhereUniqueInput.schema';
import { CommentTaggedUserCreateWithoutCommentInputObjectSchema as CommentTaggedUserCreateWithoutCommentInputObjectSchema } from './CommentTaggedUserCreateWithoutCommentInput.schema';
import { CommentTaggedUserUncheckedCreateWithoutCommentInputObjectSchema as CommentTaggedUserUncheckedCreateWithoutCommentInputObjectSchema } from './CommentTaggedUserUncheckedCreateWithoutCommentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentTaggedUserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CommentTaggedUserCreateWithoutCommentInputObjectSchema), z.lazy(() => CommentTaggedUserUncheckedCreateWithoutCommentInputObjectSchema)])
}).strict();
export const CommentTaggedUserCreateOrConnectWithoutCommentInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserCreateOrConnectWithoutCommentInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserCreateOrConnectWithoutCommentInput>;
export const CommentTaggedUserCreateOrConnectWithoutCommentInputObjectZodSchema = makeSchema();
