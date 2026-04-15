import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateWithoutProjectInputObjectSchema as TaskCreateWithoutProjectInputObjectSchema } from './TaskCreateWithoutProjectInput.schema';
import { TaskUncheckedCreateWithoutProjectInputObjectSchema as TaskUncheckedCreateWithoutProjectInputObjectSchema } from './TaskUncheckedCreateWithoutProjectInput.schema';
import { TaskCreateOrConnectWithoutProjectInputObjectSchema as TaskCreateOrConnectWithoutProjectInputObjectSchema } from './TaskCreateOrConnectWithoutProjectInput.schema';
import { TaskUpsertWithWhereUniqueWithoutProjectInputObjectSchema as TaskUpsertWithWhereUniqueWithoutProjectInputObjectSchema } from './TaskUpsertWithWhereUniqueWithoutProjectInput.schema';
import { TaskCreateManyProjectInputEnvelopeObjectSchema as TaskCreateManyProjectInputEnvelopeObjectSchema } from './TaskCreateManyProjectInputEnvelope.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithWhereUniqueWithoutProjectInputObjectSchema as TaskUpdateWithWhereUniqueWithoutProjectInputObjectSchema } from './TaskUpdateWithWhereUniqueWithoutProjectInput.schema';
import { TaskUpdateManyWithWhereWithoutProjectInputObjectSchema as TaskUpdateManyWithWhereWithoutProjectInputObjectSchema } from './TaskUpdateManyWithWhereWithoutProjectInput.schema';
import { TaskScalarWhereInputObjectSchema as TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutProjectInputObjectSchema), z.lazy(() => TaskCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => TaskUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => TaskCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TaskUpsertWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => TaskUpsertWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaskCreateManyProjectInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TaskUpdateWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => TaskUpdateWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TaskUpdateManyWithWhereWithoutProjectInputObjectSchema), z.lazy(() => TaskUpdateManyWithWhereWithoutProjectInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TaskScalarWhereInputObjectSchema), z.lazy(() => TaskScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TaskUpdateManyWithoutProjectNestedInputObjectSchema: z.ZodType<Prisma.TaskUpdateManyWithoutProjectNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateManyWithoutProjectNestedInput>;
export const TaskUpdateManyWithoutProjectNestedInputObjectZodSchema = makeSchema();
