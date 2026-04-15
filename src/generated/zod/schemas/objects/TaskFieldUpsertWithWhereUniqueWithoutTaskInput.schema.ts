import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldWhereUniqueInputObjectSchema as TaskFieldWhereUniqueInputObjectSchema } from './TaskFieldWhereUniqueInput.schema';
import { TaskFieldUpdateWithoutTaskInputObjectSchema as TaskFieldUpdateWithoutTaskInputObjectSchema } from './TaskFieldUpdateWithoutTaskInput.schema';
import { TaskFieldUncheckedUpdateWithoutTaskInputObjectSchema as TaskFieldUncheckedUpdateWithoutTaskInputObjectSchema } from './TaskFieldUncheckedUpdateWithoutTaskInput.schema';
import { TaskFieldCreateWithoutTaskInputObjectSchema as TaskFieldCreateWithoutTaskInputObjectSchema } from './TaskFieldCreateWithoutTaskInput.schema';
import { TaskFieldUncheckedCreateWithoutTaskInputObjectSchema as TaskFieldUncheckedCreateWithoutTaskInputObjectSchema } from './TaskFieldUncheckedCreateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskFieldWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TaskFieldUpdateWithoutTaskInputObjectSchema), z.lazy(() => TaskFieldUncheckedUpdateWithoutTaskInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskFieldCreateWithoutTaskInputObjectSchema), z.lazy(() => TaskFieldUncheckedCreateWithoutTaskInputObjectSchema)])
}).strict();
export const TaskFieldUpsertWithWhereUniqueWithoutTaskInputObjectSchema: z.ZodType<Prisma.TaskFieldUpsertWithWhereUniqueWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldUpsertWithWhereUniqueWithoutTaskInput>;
export const TaskFieldUpsertWithWhereUniqueWithoutTaskInputObjectZodSchema = makeSchema();
