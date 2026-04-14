import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentCreateWithoutTaggedUsersInputObjectSchema as CommentCreateWithoutTaggedUsersInputObjectSchema } from './CommentCreateWithoutTaggedUsersInput.schema';
import { CommentUncheckedCreateWithoutTaggedUsersInputObjectSchema as CommentUncheckedCreateWithoutTaggedUsersInputObjectSchema } from './CommentUncheckedCreateWithoutTaggedUsersInput.schema';
import { CommentCreateOrConnectWithoutTaggedUsersInputObjectSchema as CommentCreateOrConnectWithoutTaggedUsersInputObjectSchema } from './CommentCreateOrConnectWithoutTaggedUsersInput.schema';
import { CommentUpsertWithoutTaggedUsersInputObjectSchema as CommentUpsertWithoutTaggedUsersInputObjectSchema } from './CommentUpsertWithoutTaggedUsersInput.schema';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateToOneWithWhereWithoutTaggedUsersInputObjectSchema as CommentUpdateToOneWithWhereWithoutTaggedUsersInputObjectSchema } from './CommentUpdateToOneWithWhereWithoutTaggedUsersInput.schema';
import { CommentUpdateWithoutTaggedUsersInputObjectSchema as CommentUpdateWithoutTaggedUsersInputObjectSchema } from './CommentUpdateWithoutTaggedUsersInput.schema';
import { CommentUncheckedUpdateWithoutTaggedUsersInputObjectSchema as CommentUncheckedUpdateWithoutTaggedUsersInputObjectSchema } from './CommentUncheckedUpdateWithoutTaggedUsersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CommentCreateWithoutTaggedUsersInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutTaggedUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CommentCreateOrConnectWithoutTaggedUsersInputObjectSchema).optional(),
  upsert: z.lazy(() => CommentUpsertWithoutTaggedUsersInputObjectSchema).optional(),
  connect: z.lazy(() => CommentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CommentUpdateToOneWithWhereWithoutTaggedUsersInputObjectSchema), z.lazy(() => CommentUpdateWithoutTaggedUsersInputObjectSchema), z.lazy(() => CommentUncheckedUpdateWithoutTaggedUsersInputObjectSchema)]).optional()
}).strict();
export const CommentUpdateOneRequiredWithoutTaggedUsersNestedInputObjectSchema: z.ZodType<Prisma.CommentUpdateOneRequiredWithoutTaggedUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpdateOneRequiredWithoutTaggedUsersNestedInput>;
export const CommentUpdateOneRequiredWithoutTaggedUsersNestedInputObjectZodSchema = makeSchema();
