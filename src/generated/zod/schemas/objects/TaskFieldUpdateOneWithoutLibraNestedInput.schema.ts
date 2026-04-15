import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldCreateWithoutLibraInputObjectSchema as TaskFieldCreateWithoutLibraInputObjectSchema } from './TaskFieldCreateWithoutLibraInput.schema';
import { TaskFieldUncheckedCreateWithoutLibraInputObjectSchema as TaskFieldUncheckedCreateWithoutLibraInputObjectSchema } from './TaskFieldUncheckedCreateWithoutLibraInput.schema';
import { TaskFieldCreateOrConnectWithoutLibraInputObjectSchema as TaskFieldCreateOrConnectWithoutLibraInputObjectSchema } from './TaskFieldCreateOrConnectWithoutLibraInput.schema';
import { TaskFieldUpsertWithoutLibraInputObjectSchema as TaskFieldUpsertWithoutLibraInputObjectSchema } from './TaskFieldUpsertWithoutLibraInput.schema';
import { TaskFieldWhereInputObjectSchema as TaskFieldWhereInputObjectSchema } from './TaskFieldWhereInput.schema';
import { TaskFieldWhereUniqueInputObjectSchema as TaskFieldWhereUniqueInputObjectSchema } from './TaskFieldWhereUniqueInput.schema';
import { TaskFieldUpdateToOneWithWhereWithoutLibraInputObjectSchema as TaskFieldUpdateToOneWithWhereWithoutLibraInputObjectSchema } from './TaskFieldUpdateToOneWithWhereWithoutLibraInput.schema';
import { TaskFieldUpdateWithoutLibraInputObjectSchema as TaskFieldUpdateWithoutLibraInputObjectSchema } from './TaskFieldUpdateWithoutLibraInput.schema';
import { TaskFieldUncheckedUpdateWithoutLibraInputObjectSchema as TaskFieldUncheckedUpdateWithoutLibraInputObjectSchema } from './TaskFieldUncheckedUpdateWithoutLibraInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskFieldCreateWithoutLibraInputObjectSchema), z.lazy(() => TaskFieldUncheckedCreateWithoutLibraInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskFieldCreateOrConnectWithoutLibraInputObjectSchema).optional(),
  upsert: z.lazy(() => TaskFieldUpsertWithoutLibraInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TaskFieldWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TaskFieldWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TaskFieldWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TaskFieldUpdateToOneWithWhereWithoutLibraInputObjectSchema), z.lazy(() => TaskFieldUpdateWithoutLibraInputObjectSchema), z.lazy(() => TaskFieldUncheckedUpdateWithoutLibraInputObjectSchema)]).optional()
}).strict();
export const TaskFieldUpdateOneWithoutLibraNestedInputObjectSchema: z.ZodType<Prisma.TaskFieldUpdateOneWithoutLibraNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldUpdateOneWithoutLibraNestedInput>;
export const TaskFieldUpdateOneWithoutLibraNestedInputObjectZodSchema = makeSchema();
