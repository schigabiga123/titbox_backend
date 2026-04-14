import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutProjectInputObjectSchema as TaskUpdateWithoutProjectInputObjectSchema } from './TaskUpdateWithoutProjectInput.schema';
import { TaskUncheckedUpdateWithoutProjectInputObjectSchema as TaskUncheckedUpdateWithoutProjectInputObjectSchema } from './TaskUncheckedUpdateWithoutProjectInput.schema';
import { TaskCreateWithoutProjectInputObjectSchema as TaskCreateWithoutProjectInputObjectSchema } from './TaskCreateWithoutProjectInput.schema';
import { TaskUncheckedCreateWithoutProjectInputObjectSchema as TaskUncheckedCreateWithoutProjectInputObjectSchema } from './TaskUncheckedCreateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TaskUpdateWithoutProjectInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutProjectInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskCreateWithoutProjectInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const TaskUpsertWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput>;
export const TaskUpsertWithWhereUniqueWithoutProjectInputObjectZodSchema = makeSchema();
