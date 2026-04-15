import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutEventsInputObjectSchema as TaskCreateWithoutEventsInputObjectSchema } from './TaskCreateWithoutEventsInput.schema';
import { TaskUncheckedCreateWithoutEventsInputObjectSchema as TaskUncheckedCreateWithoutEventsInputObjectSchema } from './TaskUncheckedCreateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskCreateWithoutEventsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutEventsInputObjectSchema)])
}).strict();
export const TaskCreateOrConnectWithoutEventsInputObjectSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateOrConnectWithoutEventsInput>;
export const TaskCreateOrConnectWithoutEventsInputObjectZodSchema = makeSchema();
