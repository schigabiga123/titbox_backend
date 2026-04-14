import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentTaggedUserCreateWithoutCommentInputObjectSchema as CommentTaggedUserCreateWithoutCommentInputObjectSchema } from './CommentTaggedUserCreateWithoutCommentInput.schema';
import { CommentTaggedUserUncheckedCreateWithoutCommentInputObjectSchema as CommentTaggedUserUncheckedCreateWithoutCommentInputObjectSchema } from './CommentTaggedUserUncheckedCreateWithoutCommentInput.schema';
import { CommentTaggedUserCreateOrConnectWithoutCommentInputObjectSchema as CommentTaggedUserCreateOrConnectWithoutCommentInputObjectSchema } from './CommentTaggedUserCreateOrConnectWithoutCommentInput.schema';
import { CommentTaggedUserCreateManyCommentInputEnvelopeObjectSchema as CommentTaggedUserCreateManyCommentInputEnvelopeObjectSchema } from './CommentTaggedUserCreateManyCommentInputEnvelope.schema';
import { CommentTaggedUserWhereUniqueInputObjectSchema as CommentTaggedUserWhereUniqueInputObjectSchema } from './CommentTaggedUserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CommentTaggedUserCreateWithoutCommentInputObjectSchema), z.lazy(() => CommentTaggedUserCreateWithoutCommentInputObjectSchema).array(), z.lazy(() => CommentTaggedUserUncheckedCreateWithoutCommentInputObjectSchema), z.lazy(() => CommentTaggedUserUncheckedCreateWithoutCommentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CommentTaggedUserCreateOrConnectWithoutCommentInputObjectSchema), z.lazy(() => CommentTaggedUserCreateOrConnectWithoutCommentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CommentTaggedUserCreateManyCommentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CommentTaggedUserWhereUniqueInputObjectSchema), z.lazy(() => CommentTaggedUserWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CommentTaggedUserUncheckedCreateNestedManyWithoutCommentInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserUncheckedCreateNestedManyWithoutCommentInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserUncheckedCreateNestedManyWithoutCommentInput>;
export const CommentTaggedUserUncheckedCreateNestedManyWithoutCommentInputObjectZodSchema = makeSchema();
