import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentCreateWithoutTaskInputObjectSchema as CommentCreateWithoutTaskInputObjectSchema } from './CommentCreateWithoutTaskInput.schema';
import { CommentUncheckedCreateWithoutTaskInputObjectSchema as CommentUncheckedCreateWithoutTaskInputObjectSchema } from './CommentUncheckedCreateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CommentCreateWithoutTaskInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutTaskInputObjectSchema)])
}).strict();
export const CommentCreateOrConnectWithoutTaskInputObjectSchema: z.ZodType<Prisma.CommentCreateOrConnectWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateOrConnectWithoutTaskInput>;
export const CommentCreateOrConnectWithoutTaskInputObjectZodSchema = makeSchema();
