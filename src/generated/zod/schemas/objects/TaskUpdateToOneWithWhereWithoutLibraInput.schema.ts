import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema';
import { TaskUpdateWithoutLibraInputObjectSchema as TaskUpdateWithoutLibraInputObjectSchema } from './TaskUpdateWithoutLibraInput.schema';
import { TaskUncheckedUpdateWithoutLibraInputObjectSchema as TaskUncheckedUpdateWithoutLibraInputObjectSchema } from './TaskUncheckedUpdateWithoutLibraInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TaskUpdateWithoutLibraInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutLibraInputObjectSchema)])
}).strict();
export const TaskUpdateToOneWithWhereWithoutLibraInputObjectSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutLibraInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutLibraInput>;
export const TaskUpdateToOneWithWhereWithoutLibraInputObjectZodSchema = makeSchema();
