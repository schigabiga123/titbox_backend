import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentTaggedUserWhereUniqueInputObjectSchema as CommentTaggedUserWhereUniqueInputObjectSchema } from './CommentTaggedUserWhereUniqueInput.schema';
import { CommentTaggedUserUpdateWithoutCommentInputObjectSchema as CommentTaggedUserUpdateWithoutCommentInputObjectSchema } from './CommentTaggedUserUpdateWithoutCommentInput.schema';
import { CommentTaggedUserUncheckedUpdateWithoutCommentInputObjectSchema as CommentTaggedUserUncheckedUpdateWithoutCommentInputObjectSchema } from './CommentTaggedUserUncheckedUpdateWithoutCommentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentTaggedUserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CommentTaggedUserUpdateWithoutCommentInputObjectSchema), z.lazy(() => CommentTaggedUserUncheckedUpdateWithoutCommentInputObjectSchema)])
}).strict();
export const CommentTaggedUserUpdateWithWhereUniqueWithoutCommentInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserUpdateWithWhereUniqueWithoutCommentInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserUpdateWithWhereUniqueWithoutCommentInput>;
export const CommentTaggedUserUpdateWithWhereUniqueWithoutCommentInputObjectZodSchema = makeSchema();
