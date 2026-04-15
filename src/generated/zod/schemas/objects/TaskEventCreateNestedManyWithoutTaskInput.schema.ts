import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventCreateWithoutTaskInputObjectSchema as TaskEventCreateWithoutTaskInputObjectSchema } from './TaskEventCreateWithoutTaskInput.schema';
import { TaskEventUncheckedCreateWithoutTaskInputObjectSchema as TaskEventUncheckedCreateWithoutTaskInputObjectSchema } from './TaskEventUncheckedCreateWithoutTaskInput.schema';
import { TaskEventCreateOrConnectWithoutTaskInputObjectSchema as TaskEventCreateOrConnectWithoutTaskInputObjectSchema } from './TaskEventCreateOrConnectWithoutTaskInput.schema';
import { TaskEventCreateManyTaskInputEnvelopeObjectSchema as TaskEventCreateManyTaskInputEnvelopeObjectSchema } from './TaskEventCreateManyTaskInputEnvelope.schema';
import { TaskEventWhereUniqueInputObjectSchema as TaskEventWhereUniqueInputObjectSchema } from './TaskEventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskEventCreateWithoutTaskInputObjectSchema), z.lazy(() => TaskEventCreateWithoutTaskInputObjectSchema).array(), z.lazy(() => TaskEventUncheckedCreateWithoutTaskInputObjectSchema), z.lazy(() => TaskEventUncheckedCreateWithoutTaskInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskEventCreateOrConnectWithoutTaskInputObjectSchema), z.lazy(() => TaskEventCreateOrConnectWithoutTaskInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaskEventCreateManyTaskInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TaskEventWhereUniqueInputObjectSchema), z.lazy(() => TaskEventWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TaskEventCreateNestedManyWithoutTaskInputObjectSchema: z.ZodType<Prisma.TaskEventCreateNestedManyWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventCreateNestedManyWithoutTaskInput>;
export const TaskEventCreateNestedManyWithoutTaskInputObjectZodSchema = makeSchema();
