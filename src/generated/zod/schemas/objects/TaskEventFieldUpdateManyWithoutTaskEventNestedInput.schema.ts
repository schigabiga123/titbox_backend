import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldCreateWithoutTaskEventInputObjectSchema as TaskEventFieldCreateWithoutTaskEventInputObjectSchema } from './TaskEventFieldCreateWithoutTaskEventInput.schema';
import { TaskEventFieldUncheckedCreateWithoutTaskEventInputObjectSchema as TaskEventFieldUncheckedCreateWithoutTaskEventInputObjectSchema } from './TaskEventFieldUncheckedCreateWithoutTaskEventInput.schema';
import { TaskEventFieldCreateOrConnectWithoutTaskEventInputObjectSchema as TaskEventFieldCreateOrConnectWithoutTaskEventInputObjectSchema } from './TaskEventFieldCreateOrConnectWithoutTaskEventInput.schema';
import { TaskEventFieldUpsertWithWhereUniqueWithoutTaskEventInputObjectSchema as TaskEventFieldUpsertWithWhereUniqueWithoutTaskEventInputObjectSchema } from './TaskEventFieldUpsertWithWhereUniqueWithoutTaskEventInput.schema';
import { TaskEventFieldCreateManyTaskEventInputEnvelopeObjectSchema as TaskEventFieldCreateManyTaskEventInputEnvelopeObjectSchema } from './TaskEventFieldCreateManyTaskEventInputEnvelope.schema';
import { TaskEventFieldWhereUniqueInputObjectSchema as TaskEventFieldWhereUniqueInputObjectSchema } from './TaskEventFieldWhereUniqueInput.schema';
import { TaskEventFieldUpdateWithWhereUniqueWithoutTaskEventInputObjectSchema as TaskEventFieldUpdateWithWhereUniqueWithoutTaskEventInputObjectSchema } from './TaskEventFieldUpdateWithWhereUniqueWithoutTaskEventInput.schema';
import { TaskEventFieldUpdateManyWithWhereWithoutTaskEventInputObjectSchema as TaskEventFieldUpdateManyWithWhereWithoutTaskEventInputObjectSchema } from './TaskEventFieldUpdateManyWithWhereWithoutTaskEventInput.schema';
import { TaskEventFieldScalarWhereInputObjectSchema as TaskEventFieldScalarWhereInputObjectSchema } from './TaskEventFieldScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskEventFieldCreateWithoutTaskEventInputObjectSchema), z.lazy(() => TaskEventFieldCreateWithoutTaskEventInputObjectSchema).array(), z.lazy(() => TaskEventFieldUncheckedCreateWithoutTaskEventInputObjectSchema), z.lazy(() => TaskEventFieldUncheckedCreateWithoutTaskEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskEventFieldCreateOrConnectWithoutTaskEventInputObjectSchema), z.lazy(() => TaskEventFieldCreateOrConnectWithoutTaskEventInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TaskEventFieldUpsertWithWhereUniqueWithoutTaskEventInputObjectSchema), z.lazy(() => TaskEventFieldUpsertWithWhereUniqueWithoutTaskEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaskEventFieldCreateManyTaskEventInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TaskEventFieldWhereUniqueInputObjectSchema), z.lazy(() => TaskEventFieldWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TaskEventFieldWhereUniqueInputObjectSchema), z.lazy(() => TaskEventFieldWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TaskEventFieldWhereUniqueInputObjectSchema), z.lazy(() => TaskEventFieldWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TaskEventFieldWhereUniqueInputObjectSchema), z.lazy(() => TaskEventFieldWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TaskEventFieldUpdateWithWhereUniqueWithoutTaskEventInputObjectSchema), z.lazy(() => TaskEventFieldUpdateWithWhereUniqueWithoutTaskEventInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TaskEventFieldUpdateManyWithWhereWithoutTaskEventInputObjectSchema), z.lazy(() => TaskEventFieldUpdateManyWithWhereWithoutTaskEventInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TaskEventFieldScalarWhereInputObjectSchema), z.lazy(() => TaskEventFieldScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TaskEventFieldUpdateManyWithoutTaskEventNestedInputObjectSchema: z.ZodType<Prisma.TaskEventFieldUpdateManyWithoutTaskEventNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldUpdateManyWithoutTaskEventNestedInput>;
export const TaskEventFieldUpdateManyWithoutTaskEventNestedInputObjectZodSchema = makeSchema();
