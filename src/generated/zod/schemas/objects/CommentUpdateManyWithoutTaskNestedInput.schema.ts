import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentCreateWithoutTaskInputObjectSchema as CommentCreateWithoutTaskInputObjectSchema } from './CommentCreateWithoutTaskInput.schema';
import { CommentUncheckedCreateWithoutTaskInputObjectSchema as CommentUncheckedCreateWithoutTaskInputObjectSchema } from './CommentUncheckedCreateWithoutTaskInput.schema';
import { CommentCreateOrConnectWithoutTaskInputObjectSchema as CommentCreateOrConnectWithoutTaskInputObjectSchema } from './CommentCreateOrConnectWithoutTaskInput.schema';
import { CommentUpsertWithWhereUniqueWithoutTaskInputObjectSchema as CommentUpsertWithWhereUniqueWithoutTaskInputObjectSchema } from './CommentUpsertWithWhereUniqueWithoutTaskInput.schema';
import { CommentCreateManyTaskInputEnvelopeObjectSchema as CommentCreateManyTaskInputEnvelopeObjectSchema } from './CommentCreateManyTaskInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithWhereUniqueWithoutTaskInputObjectSchema as CommentUpdateWithWhereUniqueWithoutTaskInputObjectSchema } from './CommentUpdateWithWhereUniqueWithoutTaskInput.schema';
import { CommentUpdateManyWithWhereWithoutTaskInputObjectSchema as CommentUpdateManyWithWhereWithoutTaskInputObjectSchema } from './CommentUpdateManyWithWhereWithoutTaskInput.schema';
import { CommentScalarWhereInputObjectSchema as CommentScalarWhereInputObjectSchema } from './CommentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CommentCreateWithoutTaskInputObjectSchema), z.lazy(() => CommentCreateWithoutTaskInputObjectSchema).array(), z.lazy(() => CommentUncheckedCreateWithoutTaskInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutTaskInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CommentCreateOrConnectWithoutTaskInputObjectSchema), z.lazy(() => CommentCreateOrConnectWithoutTaskInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CommentUpsertWithWhereUniqueWithoutTaskInputObjectSchema), z.lazy(() => CommentUpsertWithWhereUniqueWithoutTaskInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CommentCreateManyTaskInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CommentWhereUniqueInputObjectSchema), z.lazy(() => CommentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CommentWhereUniqueInputObjectSchema), z.lazy(() => CommentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CommentWhereUniqueInputObjectSchema), z.lazy(() => CommentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CommentWhereUniqueInputObjectSchema), z.lazy(() => CommentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CommentUpdateWithWhereUniqueWithoutTaskInputObjectSchema), z.lazy(() => CommentUpdateWithWhereUniqueWithoutTaskInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CommentUpdateManyWithWhereWithoutTaskInputObjectSchema), z.lazy(() => CommentUpdateManyWithWhereWithoutTaskInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CommentScalarWhereInputObjectSchema), z.lazy(() => CommentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CommentUpdateManyWithoutTaskNestedInputObjectSchema: z.ZodType<Prisma.CommentUpdateManyWithoutTaskNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpdateManyWithoutTaskNestedInput>;
export const CommentUpdateManyWithoutTaskNestedInputObjectZodSchema = makeSchema();
