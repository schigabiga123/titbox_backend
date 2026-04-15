import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutTaskInputObjectSchema as CommentUpdateWithoutTaskInputObjectSchema } from './CommentUpdateWithoutTaskInput.schema';
import { CommentUncheckedUpdateWithoutTaskInputObjectSchema as CommentUncheckedUpdateWithoutTaskInputObjectSchema } from './CommentUncheckedUpdateWithoutTaskInput.schema';
import { CommentCreateWithoutTaskInputObjectSchema as CommentCreateWithoutTaskInputObjectSchema } from './CommentCreateWithoutTaskInput.schema';
import { CommentUncheckedCreateWithoutTaskInputObjectSchema as CommentUncheckedCreateWithoutTaskInputObjectSchema } from './CommentUncheckedCreateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CommentUpdateWithoutTaskInputObjectSchema), z.lazy(() => CommentUncheckedUpdateWithoutTaskInputObjectSchema)]),
  create: z.union([z.lazy(() => CommentCreateWithoutTaskInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutTaskInputObjectSchema)])
}).strict();
export const CommentUpsertWithWhereUniqueWithoutTaskInputObjectSchema: z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutTaskInput>;
export const CommentUpsertWithWhereUniqueWithoutTaskInputObjectZodSchema = makeSchema();
