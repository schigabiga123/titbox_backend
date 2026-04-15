import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentTaggedUserWhereUniqueInputObjectSchema as CommentTaggedUserWhereUniqueInputObjectSchema } from './CommentTaggedUserWhereUniqueInput.schema';
import { CommentTaggedUserUpdateWithoutCommentInputObjectSchema as CommentTaggedUserUpdateWithoutCommentInputObjectSchema } from './CommentTaggedUserUpdateWithoutCommentInput.schema';
import { CommentTaggedUserUncheckedUpdateWithoutCommentInputObjectSchema as CommentTaggedUserUncheckedUpdateWithoutCommentInputObjectSchema } from './CommentTaggedUserUncheckedUpdateWithoutCommentInput.schema';
import { CommentTaggedUserCreateWithoutCommentInputObjectSchema as CommentTaggedUserCreateWithoutCommentInputObjectSchema } from './CommentTaggedUserCreateWithoutCommentInput.schema';
import { CommentTaggedUserUncheckedCreateWithoutCommentInputObjectSchema as CommentTaggedUserUncheckedCreateWithoutCommentInputObjectSchema } from './CommentTaggedUserUncheckedCreateWithoutCommentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentTaggedUserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CommentTaggedUserUpdateWithoutCommentInputObjectSchema), z.lazy(() => CommentTaggedUserUncheckedUpdateWithoutCommentInputObjectSchema)]),
  create: z.union([z.lazy(() => CommentTaggedUserCreateWithoutCommentInputObjectSchema), z.lazy(() => CommentTaggedUserUncheckedCreateWithoutCommentInputObjectSchema)])
}).strict();
export const CommentTaggedUserUpsertWithWhereUniqueWithoutCommentInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserUpsertWithWhereUniqueWithoutCommentInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserUpsertWithWhereUniqueWithoutCommentInput>;
export const CommentTaggedUserUpsertWithWhereUniqueWithoutCommentInputObjectZodSchema = makeSchema();
