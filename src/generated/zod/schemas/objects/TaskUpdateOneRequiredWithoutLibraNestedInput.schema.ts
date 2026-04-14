import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateWithoutLibraInputObjectSchema as TaskCreateWithoutLibraInputObjectSchema } from './TaskCreateWithoutLibraInput.schema';
import { TaskUncheckedCreateWithoutLibraInputObjectSchema as TaskUncheckedCreateWithoutLibraInputObjectSchema } from './TaskUncheckedCreateWithoutLibraInput.schema';
import { TaskCreateOrConnectWithoutLibraInputObjectSchema as TaskCreateOrConnectWithoutLibraInputObjectSchema } from './TaskCreateOrConnectWithoutLibraInput.schema';
import { TaskUpsertWithoutLibraInputObjectSchema as TaskUpsertWithoutLibraInputObjectSchema } from './TaskUpsertWithoutLibraInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateToOneWithWhereWithoutLibraInputObjectSchema as TaskUpdateToOneWithWhereWithoutLibraInputObjectSchema } from './TaskUpdateToOneWithWhereWithoutLibraInput.schema';
import { TaskUpdateWithoutLibraInputObjectSchema as TaskUpdateWithoutLibraInputObjectSchema } from './TaskUpdateWithoutLibraInput.schema';
import { TaskUncheckedUpdateWithoutLibraInputObjectSchema as TaskUncheckedUpdateWithoutLibraInputObjectSchema } from './TaskUncheckedUpdateWithoutLibraInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutLibraInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutLibraInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutLibraInputObjectSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutLibraInputObjectSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TaskUpdateToOneWithWhereWithoutLibraInputObjectSchema), z.lazy(() => TaskUpdateWithoutLibraInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutLibraInputObjectSchema)]).optional()
}).strict();
export const TaskUpdateOneRequiredWithoutLibraNestedInputObjectSchema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutLibraNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateOneRequiredWithoutLibraNestedInput>;
export const TaskUpdateOneRequiredWithoutLibraNestedInputObjectZodSchema = makeSchema();
