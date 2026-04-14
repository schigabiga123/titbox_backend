import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutProjectInputObjectSchema as TaskUpdateWithoutProjectInputObjectSchema } from './TaskUpdateWithoutProjectInput.schema';
import { TaskUncheckedUpdateWithoutProjectInputObjectSchema as TaskUncheckedUpdateWithoutProjectInputObjectSchema } from './TaskUncheckedUpdateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TaskUpdateWithoutProjectInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutProjectInputObjectSchema)])
}).strict();
export const TaskUpdateWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput>;
export const TaskUpdateWithWhereUniqueWithoutProjectInputObjectZodSchema = makeSchema();
