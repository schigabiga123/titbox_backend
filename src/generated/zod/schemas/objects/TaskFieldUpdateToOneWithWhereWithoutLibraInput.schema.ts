import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldWhereInputObjectSchema as TaskFieldWhereInputObjectSchema } from './TaskFieldWhereInput.schema';
import { TaskFieldUpdateWithoutLibraInputObjectSchema as TaskFieldUpdateWithoutLibraInputObjectSchema } from './TaskFieldUpdateWithoutLibraInput.schema';
import { TaskFieldUncheckedUpdateWithoutLibraInputObjectSchema as TaskFieldUncheckedUpdateWithoutLibraInputObjectSchema } from './TaskFieldUncheckedUpdateWithoutLibraInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskFieldWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TaskFieldUpdateWithoutLibraInputObjectSchema), z.lazy(() => TaskFieldUncheckedUpdateWithoutLibraInputObjectSchema)])
}).strict();
export const TaskFieldUpdateToOneWithWhereWithoutLibraInputObjectSchema: z.ZodType<Prisma.TaskFieldUpdateToOneWithWhereWithoutLibraInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldUpdateToOneWithWhereWithoutLibraInput>;
export const TaskFieldUpdateToOneWithWhereWithoutLibraInputObjectZodSchema = makeSchema();
