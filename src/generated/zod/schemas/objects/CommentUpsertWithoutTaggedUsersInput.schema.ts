import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentUpdateWithoutTaggedUsersInputObjectSchema as CommentUpdateWithoutTaggedUsersInputObjectSchema } from './CommentUpdateWithoutTaggedUsersInput.schema';
import { CommentUncheckedUpdateWithoutTaggedUsersInputObjectSchema as CommentUncheckedUpdateWithoutTaggedUsersInputObjectSchema } from './CommentUncheckedUpdateWithoutTaggedUsersInput.schema';
import { CommentCreateWithoutTaggedUsersInputObjectSchema as CommentCreateWithoutTaggedUsersInputObjectSchema } from './CommentCreateWithoutTaggedUsersInput.schema';
import { CommentUncheckedCreateWithoutTaggedUsersInputObjectSchema as CommentUncheckedCreateWithoutTaggedUsersInputObjectSchema } from './CommentUncheckedCreateWithoutTaggedUsersInput.schema';
import { CommentWhereInputObjectSchema as CommentWhereInputObjectSchema } from './CommentWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CommentUpdateWithoutTaggedUsersInputObjectSchema), z.lazy(() => CommentUncheckedUpdateWithoutTaggedUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => CommentCreateWithoutTaggedUsersInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutTaggedUsersInputObjectSchema)]),
  where: z.lazy(() => CommentWhereInputObjectSchema).optional()
}).strict();
export const CommentUpsertWithoutTaggedUsersInputObjectSchema: z.ZodType<Prisma.CommentUpsertWithoutTaggedUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpsertWithoutTaggedUsersInput>;
export const CommentUpsertWithoutTaggedUsersInputObjectZodSchema = makeSchema();
