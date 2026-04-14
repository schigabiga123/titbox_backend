import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldUpdateWithoutLibraInputObjectSchema as TaskFieldUpdateWithoutLibraInputObjectSchema } from './TaskFieldUpdateWithoutLibraInput.schema';
import { TaskFieldUncheckedUpdateWithoutLibraInputObjectSchema as TaskFieldUncheckedUpdateWithoutLibraInputObjectSchema } from './TaskFieldUncheckedUpdateWithoutLibraInput.schema';
import { TaskFieldCreateWithoutLibraInputObjectSchema as TaskFieldCreateWithoutLibraInputObjectSchema } from './TaskFieldCreateWithoutLibraInput.schema';
import { TaskFieldUncheckedCreateWithoutLibraInputObjectSchema as TaskFieldUncheckedCreateWithoutLibraInputObjectSchema } from './TaskFieldUncheckedCreateWithoutLibraInput.schema';
import { TaskFieldWhereInputObjectSchema as TaskFieldWhereInputObjectSchema } from './TaskFieldWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TaskFieldUpdateWithoutLibraInputObjectSchema), z.lazy(() => TaskFieldUncheckedUpdateWithoutLibraInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskFieldCreateWithoutLibraInputObjectSchema), z.lazy(() => TaskFieldUncheckedCreateWithoutLibraInputObjectSchema)]),
  where: z.lazy(() => TaskFieldWhereInputObjectSchema).optional()
}).strict();
export const TaskFieldUpsertWithoutLibraInputObjectSchema: z.ZodType<Prisma.TaskFieldUpsertWithoutLibraInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldUpsertWithoutLibraInput>;
export const TaskFieldUpsertWithoutLibraInputObjectZodSchema = makeSchema();
