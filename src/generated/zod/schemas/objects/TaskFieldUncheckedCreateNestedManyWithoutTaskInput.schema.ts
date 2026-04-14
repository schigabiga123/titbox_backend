import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldCreateWithoutTaskInputObjectSchema as TaskFieldCreateWithoutTaskInputObjectSchema } from './TaskFieldCreateWithoutTaskInput.schema';
import { TaskFieldUncheckedCreateWithoutTaskInputObjectSchema as TaskFieldUncheckedCreateWithoutTaskInputObjectSchema } from './TaskFieldUncheckedCreateWithoutTaskInput.schema';
import { TaskFieldCreateOrConnectWithoutTaskInputObjectSchema as TaskFieldCreateOrConnectWithoutTaskInputObjectSchema } from './TaskFieldCreateOrConnectWithoutTaskInput.schema';
import { TaskFieldCreateManyTaskInputEnvelopeObjectSchema as TaskFieldCreateManyTaskInputEnvelopeObjectSchema } from './TaskFieldCreateManyTaskInputEnvelope.schema';
import { TaskFieldWhereUniqueInputObjectSchema as TaskFieldWhereUniqueInputObjectSchema } from './TaskFieldWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskFieldCreateWithoutTaskInputObjectSchema), z.lazy(() => TaskFieldCreateWithoutTaskInputObjectSchema).array(), z.lazy(() => TaskFieldUncheckedCreateWithoutTaskInputObjectSchema), z.lazy(() => TaskFieldUncheckedCreateWithoutTaskInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskFieldCreateOrConnectWithoutTaskInputObjectSchema), z.lazy(() => TaskFieldCreateOrConnectWithoutTaskInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaskFieldCreateManyTaskInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TaskFieldWhereUniqueInputObjectSchema), z.lazy(() => TaskFieldWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TaskFieldUncheckedCreateNestedManyWithoutTaskInputObjectSchema: z.ZodType<Prisma.TaskFieldUncheckedCreateNestedManyWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldUncheckedCreateNestedManyWithoutTaskInput>;
export const TaskFieldUncheckedCreateNestedManyWithoutTaskInputObjectZodSchema = makeSchema();
