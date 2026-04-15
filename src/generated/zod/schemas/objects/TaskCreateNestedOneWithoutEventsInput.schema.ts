import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateWithoutEventsInputObjectSchema as TaskCreateWithoutEventsInputObjectSchema } from './TaskCreateWithoutEventsInput.schema';
import { TaskUncheckedCreateWithoutEventsInputObjectSchema as TaskUncheckedCreateWithoutEventsInputObjectSchema } from './TaskUncheckedCreateWithoutEventsInput.schema';
import { TaskCreateOrConnectWithoutEventsInputObjectSchema as TaskCreateOrConnectWithoutEventsInputObjectSchema } from './TaskCreateOrConnectWithoutEventsInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutEventsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional()
}).strict();
export const TaskCreateNestedOneWithoutEventsInputObjectSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateNestedOneWithoutEventsInput>;
export const TaskCreateNestedOneWithoutEventsInputObjectZodSchema = makeSchema();
