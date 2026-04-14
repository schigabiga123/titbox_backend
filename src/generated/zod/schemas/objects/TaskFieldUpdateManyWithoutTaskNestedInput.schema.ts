import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldCreateWithoutTaskInputObjectSchema as TaskFieldCreateWithoutTaskInputObjectSchema } from './TaskFieldCreateWithoutTaskInput.schema';
import { TaskFieldUncheckedCreateWithoutTaskInputObjectSchema as TaskFieldUncheckedCreateWithoutTaskInputObjectSchema } from './TaskFieldUncheckedCreateWithoutTaskInput.schema';
import { TaskFieldCreateOrConnectWithoutTaskInputObjectSchema as TaskFieldCreateOrConnectWithoutTaskInputObjectSchema } from './TaskFieldCreateOrConnectWithoutTaskInput.schema';
import { TaskFieldUpsertWithWhereUniqueWithoutTaskInputObjectSchema as TaskFieldUpsertWithWhereUniqueWithoutTaskInputObjectSchema } from './TaskFieldUpsertWithWhereUniqueWithoutTaskInput.schema';
import { TaskFieldCreateManyTaskInputEnvelopeObjectSchema as TaskFieldCreateManyTaskInputEnvelopeObjectSchema } from './TaskFieldCreateManyTaskInputEnvelope.schema';
import { TaskFieldWhereUniqueInputObjectSchema as TaskFieldWhereUniqueInputObjectSchema } from './TaskFieldWhereUniqueInput.schema';
import { TaskFieldUpdateWithWhereUniqueWithoutTaskInputObjectSchema as TaskFieldUpdateWithWhereUniqueWithoutTaskInputObjectSchema } from './TaskFieldUpdateWithWhereUniqueWithoutTaskInput.schema';
import { TaskFieldUpdateManyWithWhereWithoutTaskInputObjectSchema as TaskFieldUpdateManyWithWhereWithoutTaskInputObjectSchema } from './TaskFieldUpdateManyWithWhereWithoutTaskInput.schema';
import { TaskFieldScalarWhereInputObjectSchema as TaskFieldScalarWhereInputObjectSchema } from './TaskFieldScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskFieldCreateWithoutTaskInputObjectSchema), z.lazy(() => TaskFieldCreateWithoutTaskInputObjectSchema).array(), z.lazy(() => TaskFieldUncheckedCreateWithoutTaskInputObjectSchema), z.lazy(() => TaskFieldUncheckedCreateWithoutTaskInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskFieldCreateOrConnectWithoutTaskInputObjectSchema), z.lazy(() => TaskFieldCreateOrConnectWithoutTaskInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TaskFieldUpsertWithWhereUniqueWithoutTaskInputObjectSchema), z.lazy(() => TaskFieldUpsertWithWhereUniqueWithoutTaskInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaskFieldCreateManyTaskInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TaskFieldWhereUniqueInputObjectSchema), z.lazy(() => TaskFieldWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TaskFieldWhereUniqueInputObjectSchema), z.lazy(() => TaskFieldWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TaskFieldWhereUniqueInputObjectSchema), z.lazy(() => TaskFieldWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TaskFieldWhereUniqueInputObjectSchema), z.lazy(() => TaskFieldWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TaskFieldUpdateWithWhereUniqueWithoutTaskInputObjectSchema), z.lazy(() => TaskFieldUpdateWithWhereUniqueWithoutTaskInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TaskFieldUpdateManyWithWhereWithoutTaskInputObjectSchema), z.lazy(() => TaskFieldUpdateManyWithWhereWithoutTaskInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TaskFieldScalarWhereInputObjectSchema), z.lazy(() => TaskFieldScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TaskFieldUpdateManyWithoutTaskNestedInputObjectSchema: z.ZodType<Prisma.TaskFieldUpdateManyWithoutTaskNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldUpdateManyWithoutTaskNestedInput>;
export const TaskFieldUpdateManyWithoutTaskNestedInputObjectZodSchema = makeSchema();
