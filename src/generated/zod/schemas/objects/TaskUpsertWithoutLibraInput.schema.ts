import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskUpdateWithoutLibraInputObjectSchema as TaskUpdateWithoutLibraInputObjectSchema } from './TaskUpdateWithoutLibraInput.schema';
import { TaskUncheckedUpdateWithoutLibraInputObjectSchema as TaskUncheckedUpdateWithoutLibraInputObjectSchema } from './TaskUncheckedUpdateWithoutLibraInput.schema';
import { TaskCreateWithoutLibraInputObjectSchema as TaskCreateWithoutLibraInputObjectSchema } from './TaskCreateWithoutLibraInput.schema';
import { TaskUncheckedCreateWithoutLibraInputObjectSchema as TaskUncheckedCreateWithoutLibraInputObjectSchema } from './TaskUncheckedCreateWithoutLibraInput.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TaskUpdateWithoutLibraInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutLibraInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskCreateWithoutLibraInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutLibraInputObjectSchema)]),
  where: z.lazy(() => TaskWhereInputObjectSchema).optional()
}).strict();
export const TaskUpsertWithoutLibraInputObjectSchema: z.ZodType<Prisma.TaskUpsertWithoutLibraInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpsertWithoutLibraInput>;
export const TaskUpsertWithoutLibraInputObjectZodSchema = makeSchema();
