import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateWithoutProjectInputObjectSchema as TaskCreateWithoutProjectInputObjectSchema } from './TaskCreateWithoutProjectInput.schema';
import { TaskUncheckedCreateWithoutProjectInputObjectSchema as TaskUncheckedCreateWithoutProjectInputObjectSchema } from './TaskUncheckedCreateWithoutProjectInput.schema';
import { TaskCreateOrConnectWithoutProjectInputObjectSchema as TaskCreateOrConnectWithoutProjectInputObjectSchema } from './TaskCreateOrConnectWithoutProjectInput.schema';
import { TaskCreateManyProjectInputEnvelopeObjectSchema as TaskCreateManyProjectInputEnvelopeObjectSchema } from './TaskCreateManyProjectInputEnvelope.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutProjectInputObjectSchema), z.lazy(() => TaskCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => TaskUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => TaskCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaskCreateManyProjectInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TaskCreateNestedManyWithoutProjectInputObjectSchema: z.ZodType<Prisma.TaskCreateNestedManyWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateNestedManyWithoutProjectInput>;
export const TaskCreateNestedManyWithoutProjectInputObjectZodSchema = makeSchema();
