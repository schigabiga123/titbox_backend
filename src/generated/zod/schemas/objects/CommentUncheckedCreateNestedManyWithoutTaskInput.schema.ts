import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentCreateWithoutTaskInputObjectSchema as CommentCreateWithoutTaskInputObjectSchema } from './CommentCreateWithoutTaskInput.schema';
import { CommentUncheckedCreateWithoutTaskInputObjectSchema as CommentUncheckedCreateWithoutTaskInputObjectSchema } from './CommentUncheckedCreateWithoutTaskInput.schema';
import { CommentCreateOrConnectWithoutTaskInputObjectSchema as CommentCreateOrConnectWithoutTaskInputObjectSchema } from './CommentCreateOrConnectWithoutTaskInput.schema';
import { CommentCreateManyTaskInputEnvelopeObjectSchema as CommentCreateManyTaskInputEnvelopeObjectSchema } from './CommentCreateManyTaskInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CommentCreateWithoutTaskInputObjectSchema), z.lazy(() => CommentCreateWithoutTaskInputObjectSchema).array(), z.lazy(() => CommentUncheckedCreateWithoutTaskInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutTaskInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CommentCreateOrConnectWithoutTaskInputObjectSchema), z.lazy(() => CommentCreateOrConnectWithoutTaskInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CommentCreateManyTaskInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CommentWhereUniqueInputObjectSchema), z.lazy(() => CommentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CommentUncheckedCreateNestedManyWithoutTaskInputObjectSchema: z.ZodType<Prisma.CommentUncheckedCreateNestedManyWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUncheckedCreateNestedManyWithoutTaskInput>;
export const CommentUncheckedCreateNestedManyWithoutTaskInputObjectZodSchema = makeSchema();
