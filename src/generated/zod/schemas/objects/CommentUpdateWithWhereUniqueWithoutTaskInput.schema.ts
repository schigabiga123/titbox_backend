import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutTaskInputObjectSchema as CommentUpdateWithoutTaskInputObjectSchema } from './CommentUpdateWithoutTaskInput.schema';
import { CommentUncheckedUpdateWithoutTaskInputObjectSchema as CommentUncheckedUpdateWithoutTaskInputObjectSchema } from './CommentUncheckedUpdateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CommentUpdateWithoutTaskInputObjectSchema), z.lazy(() => CommentUncheckedUpdateWithoutTaskInputObjectSchema)])
}).strict();
export const CommentUpdateWithWhereUniqueWithoutTaskInputObjectSchema: z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutTaskInput>;
export const CommentUpdateWithWhereUniqueWithoutTaskInputObjectZodSchema = makeSchema();
