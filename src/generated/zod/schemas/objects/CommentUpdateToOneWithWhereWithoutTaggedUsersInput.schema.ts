import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentWhereInputObjectSchema as CommentWhereInputObjectSchema } from './CommentWhereInput.schema';
import { CommentUpdateWithoutTaggedUsersInputObjectSchema as CommentUpdateWithoutTaggedUsersInputObjectSchema } from './CommentUpdateWithoutTaggedUsersInput.schema';
import { CommentUncheckedUpdateWithoutTaggedUsersInputObjectSchema as CommentUncheckedUpdateWithoutTaggedUsersInputObjectSchema } from './CommentUncheckedUpdateWithoutTaggedUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CommentUpdateWithoutTaggedUsersInputObjectSchema), z.lazy(() => CommentUncheckedUpdateWithoutTaggedUsersInputObjectSchema)])
}).strict();
export const CommentUpdateToOneWithWhereWithoutTaggedUsersInputObjectSchema: z.ZodType<Prisma.CommentUpdateToOneWithWhereWithoutTaggedUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpdateToOneWithWhereWithoutTaggedUsersInput>;
export const CommentUpdateToOneWithWhereWithoutTaggedUsersInputObjectZodSchema = makeSchema();
