import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentTaggedUserCreateWithoutCommentInputObjectSchema as CommentTaggedUserCreateWithoutCommentInputObjectSchema } from './CommentTaggedUserCreateWithoutCommentInput.schema';
import { CommentTaggedUserUncheckedCreateWithoutCommentInputObjectSchema as CommentTaggedUserUncheckedCreateWithoutCommentInputObjectSchema } from './CommentTaggedUserUncheckedCreateWithoutCommentInput.schema';
import { CommentTaggedUserCreateOrConnectWithoutCommentInputObjectSchema as CommentTaggedUserCreateOrConnectWithoutCommentInputObjectSchema } from './CommentTaggedUserCreateOrConnectWithoutCommentInput.schema';
import { CommentTaggedUserUpsertWithWhereUniqueWithoutCommentInputObjectSchema as CommentTaggedUserUpsertWithWhereUniqueWithoutCommentInputObjectSchema } from './CommentTaggedUserUpsertWithWhereUniqueWithoutCommentInput.schema';
import { CommentTaggedUserCreateManyCommentInputEnvelopeObjectSchema as CommentTaggedUserCreateManyCommentInputEnvelopeObjectSchema } from './CommentTaggedUserCreateManyCommentInputEnvelope.schema';
import { CommentTaggedUserWhereUniqueInputObjectSchema as CommentTaggedUserWhereUniqueInputObjectSchema } from './CommentTaggedUserWhereUniqueInput.schema';
import { CommentTaggedUserUpdateWithWhereUniqueWithoutCommentInputObjectSchema as CommentTaggedUserUpdateWithWhereUniqueWithoutCommentInputObjectSchema } from './CommentTaggedUserUpdateWithWhereUniqueWithoutCommentInput.schema';
import { CommentTaggedUserUpdateManyWithWhereWithoutCommentInputObjectSchema as CommentTaggedUserUpdateManyWithWhereWithoutCommentInputObjectSchema } from './CommentTaggedUserUpdateManyWithWhereWithoutCommentInput.schema';
import { CommentTaggedUserScalarWhereInputObjectSchema as CommentTaggedUserScalarWhereInputObjectSchema } from './CommentTaggedUserScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CommentTaggedUserCreateWithoutCommentInputObjectSchema), z.lazy(() => CommentTaggedUserCreateWithoutCommentInputObjectSchema).array(), z.lazy(() => CommentTaggedUserUncheckedCreateWithoutCommentInputObjectSchema), z.lazy(() => CommentTaggedUserUncheckedCreateWithoutCommentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CommentTaggedUserCreateOrConnectWithoutCommentInputObjectSchema), z.lazy(() => CommentTaggedUserCreateOrConnectWithoutCommentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CommentTaggedUserUpsertWithWhereUniqueWithoutCommentInputObjectSchema), z.lazy(() => CommentTaggedUserUpsertWithWhereUniqueWithoutCommentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CommentTaggedUserCreateManyCommentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CommentTaggedUserWhereUniqueInputObjectSchema), z.lazy(() => CommentTaggedUserWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CommentTaggedUserWhereUniqueInputObjectSchema), z.lazy(() => CommentTaggedUserWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CommentTaggedUserWhereUniqueInputObjectSchema), z.lazy(() => CommentTaggedUserWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CommentTaggedUserWhereUniqueInputObjectSchema), z.lazy(() => CommentTaggedUserWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CommentTaggedUserUpdateWithWhereUniqueWithoutCommentInputObjectSchema), z.lazy(() => CommentTaggedUserUpdateWithWhereUniqueWithoutCommentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CommentTaggedUserUpdateManyWithWhereWithoutCommentInputObjectSchema), z.lazy(() => CommentTaggedUserUpdateManyWithWhereWithoutCommentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CommentTaggedUserScalarWhereInputObjectSchema), z.lazy(() => CommentTaggedUserScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CommentTaggedUserUncheckedUpdateManyWithoutCommentNestedInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserUncheckedUpdateManyWithoutCommentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserUncheckedUpdateManyWithoutCommentNestedInput>;
export const CommentTaggedUserUncheckedUpdateManyWithoutCommentNestedInputObjectZodSchema = makeSchema();
