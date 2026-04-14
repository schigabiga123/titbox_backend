import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentCreateWithoutTaggedUsersInputObjectSchema as CommentCreateWithoutTaggedUsersInputObjectSchema } from './CommentCreateWithoutTaggedUsersInput.schema';
import { CommentUncheckedCreateWithoutTaggedUsersInputObjectSchema as CommentUncheckedCreateWithoutTaggedUsersInputObjectSchema } from './CommentUncheckedCreateWithoutTaggedUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CommentCreateWithoutTaggedUsersInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutTaggedUsersInputObjectSchema)])
}).strict();
export const CommentCreateOrConnectWithoutTaggedUsersInputObjectSchema: z.ZodType<Prisma.CommentCreateOrConnectWithoutTaggedUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateOrConnectWithoutTaggedUsersInput>;
export const CommentCreateOrConnectWithoutTaggedUsersInputObjectZodSchema = makeSchema();
