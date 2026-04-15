import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventCreateWithoutTaskInputObjectSchema as TaskEventCreateWithoutTaskInputObjectSchema } from './TaskEventCreateWithoutTaskInput.schema';
import { TaskEventUncheckedCreateWithoutTaskInputObjectSchema as TaskEventUncheckedCreateWithoutTaskInputObjectSchema } from './TaskEventUncheckedCreateWithoutTaskInput.schema';
import { TaskEventCreateOrConnectWithoutTaskInputObjectSchema as TaskEventCreateOrConnectWithoutTaskInputObjectSchema } from './TaskEventCreateOrConnectWithoutTaskInput.schema';
import { TaskEventUpsertWithWhereUniqueWithoutTaskInputObjectSchema as TaskEventUpsertWithWhereUniqueWithoutTaskInputObjectSchema } from './TaskEventUpsertWithWhereUniqueWithoutTaskInput.schema';
import { TaskEventCreateManyTaskInputEnvelopeObjectSchema as TaskEventCreateManyTaskInputEnvelopeObjectSchema } from './TaskEventCreateManyTaskInputEnvelope.schema';
import { TaskEventWhereUniqueInputObjectSchema as TaskEventWhereUniqueInputObjectSchema } from './TaskEventWhereUniqueInput.schema';
import { TaskEventUpdateWithWhereUniqueWithoutTaskInputObjectSchema as TaskEventUpdateWithWhereUniqueWithoutTaskInputObjectSchema } from './TaskEventUpdateWithWhereUniqueWithoutTaskInput.schema';
import { TaskEventUpdateManyWithWhereWithoutTaskInputObjectSchema as TaskEventUpdateManyWithWhereWithoutTaskInputObjectSchema } from './TaskEventUpdateManyWithWhereWithoutTaskInput.schema';
import { TaskEventScalarWhereInputObjectSchema as TaskEventScalarWhereInputObjectSchema } from './TaskEventScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskEventCreateWithoutTaskInputObjectSchema), z.lazy(() => TaskEventCreateWithoutTaskInputObjectSchema).array(), z.lazy(() => TaskEventUncheckedCreateWithoutTaskInputObjectSchema), z.lazy(() => TaskEventUncheckedCreateWithoutTaskInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskEventCreateOrConnectWithoutTaskInputObjectSchema), z.lazy(() => TaskEventCreateOrConnectWithoutTaskInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TaskEventUpsertWithWhereUniqueWithoutTaskInputObjectSchema), z.lazy(() => TaskEventUpsertWithWhereUniqueWithoutTaskInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaskEventCreateManyTaskInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TaskEventWhereUniqueInputObjectSchema), z.lazy(() => TaskEventWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TaskEventWhereUniqueInputObjectSchema), z.lazy(() => TaskEventWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TaskEventWhereUniqueInputObjectSchema), z.lazy(() => TaskEventWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TaskEventWhereUniqueInputObjectSchema), z.lazy(() => TaskEventWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TaskEventUpdateWithWhereUniqueWithoutTaskInputObjectSchema), z.lazy(() => TaskEventUpdateWithWhereUniqueWithoutTaskInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TaskEventUpdateManyWithWhereWithoutTaskInputObjectSchema), z.lazy(() => TaskEventUpdateManyWithWhereWithoutTaskInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TaskEventScalarWhereInputObjectSchema), z.lazy(() => TaskEventScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TaskEventUncheckedUpdateManyWithoutTaskNestedInputObjectSchema: z.ZodType<Prisma.TaskEventUncheckedUpdateManyWithoutTaskNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventUncheckedUpdateManyWithoutTaskNestedInput>;
export const TaskEventUncheckedUpdateManyWithoutTaskNestedInputObjectZodSchema = makeSchema();
