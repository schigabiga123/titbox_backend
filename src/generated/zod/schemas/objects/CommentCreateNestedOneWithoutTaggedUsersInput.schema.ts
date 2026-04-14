import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentCreateWithoutTaggedUsersInputObjectSchema as CommentCreateWithoutTaggedUsersInputObjectSchema } from './CommentCreateWithoutTaggedUsersInput.schema';
import { CommentUncheckedCreateWithoutTaggedUsersInputObjectSchema as CommentUncheckedCreateWithoutTaggedUsersInputObjectSchema } from './CommentUncheckedCreateWithoutTaggedUsersInput.schema';
import { CommentCreateOrConnectWithoutTaggedUsersInputObjectSchema as CommentCreateOrConnectWithoutTaggedUsersInputObjectSchema } from './CommentCreateOrConnectWithoutTaggedUsersInput.schema';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CommentCreateWithoutTaggedUsersInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutTaggedUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CommentCreateOrConnectWithoutTaggedUsersInputObjectSchema).optional(),
  connect: z.lazy(() => CommentWhereUniqueInputObjectSchema).optional()
}).strict();
export const CommentCreateNestedOneWithoutTaggedUsersInputObjectSchema: z.ZodType<Prisma.CommentCreateNestedOneWithoutTaggedUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateNestedOneWithoutTaggedUsersInput>;
export const CommentCreateNestedOneWithoutTaggedUsersInputObjectZodSchema = makeSchema();
