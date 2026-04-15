import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventWhereUniqueInputObjectSchema as TaskEventWhereUniqueInputObjectSchema } from './TaskEventWhereUniqueInput.schema';
import { TaskEventCreateWithoutTaskInputObjectSchema as TaskEventCreateWithoutTaskInputObjectSchema } from './TaskEventCreateWithoutTaskInput.schema';
import { TaskEventUncheckedCreateWithoutTaskInputObjectSchema as TaskEventUncheckedCreateWithoutTaskInputObjectSchema } from './TaskEventUncheckedCreateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskEventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskEventCreateWithoutTaskInputObjectSchema), z.lazy(() => TaskEventUncheckedCreateWithoutTaskInputObjectSchema)])
}).strict();
export const TaskEventCreateOrConnectWithoutTaskInputObjectSchema: z.ZodType<Prisma.TaskEventCreateOrConnectWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventCreateOrConnectWithoutTaskInput>;
export const TaskEventCreateOrConnectWithoutTaskInputObjectZodSchema = makeSchema();
