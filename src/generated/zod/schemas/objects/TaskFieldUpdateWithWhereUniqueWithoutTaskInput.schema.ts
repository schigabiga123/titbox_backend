import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldWhereUniqueInputObjectSchema as TaskFieldWhereUniqueInputObjectSchema } from './TaskFieldWhereUniqueInput.schema';
import { TaskFieldUpdateWithoutTaskInputObjectSchema as TaskFieldUpdateWithoutTaskInputObjectSchema } from './TaskFieldUpdateWithoutTaskInput.schema';
import { TaskFieldUncheckedUpdateWithoutTaskInputObjectSchema as TaskFieldUncheckedUpdateWithoutTaskInputObjectSchema } from './TaskFieldUncheckedUpdateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskFieldWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TaskFieldUpdateWithoutTaskInputObjectSchema), z.lazy(() => TaskFieldUncheckedUpdateWithoutTaskInputObjectSchema)])
}).strict();
export const TaskFieldUpdateWithWhereUniqueWithoutTaskInputObjectSchema: z.ZodType<Prisma.TaskFieldUpdateWithWhereUniqueWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldUpdateWithWhereUniqueWithoutTaskInput>;
export const TaskFieldUpdateWithWhereUniqueWithoutTaskInputObjectZodSchema = makeSchema();
