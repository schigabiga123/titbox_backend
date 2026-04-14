import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentTaggedUserScalarWhereInputObjectSchema as CommentTaggedUserScalarWhereInputObjectSchema } from './CommentTaggedUserScalarWhereInput.schema';
import { CommentTaggedUserUpdateManyMutationInputObjectSchema as CommentTaggedUserUpdateManyMutationInputObjectSchema } from './CommentTaggedUserUpdateManyMutationInput.schema';
import { CommentTaggedUserUncheckedUpdateManyWithoutCommentInputObjectSchema as CommentTaggedUserUncheckedUpdateManyWithoutCommentInputObjectSchema } from './CommentTaggedUserUncheckedUpdateManyWithoutCommentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentTaggedUserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CommentTaggedUserUpdateManyMutationInputObjectSchema), z.lazy(() => CommentTaggedUserUncheckedUpdateManyWithoutCommentInputObjectSchema)])
}).strict();
export const CommentTaggedUserUpdateManyWithWhereWithoutCommentInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserUpdateManyWithWhereWithoutCommentInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserUpdateManyWithWhereWithoutCommentInput>;
export const CommentTaggedUserUpdateManyWithWhereWithoutCommentInputObjectZodSchema = makeSchema();
