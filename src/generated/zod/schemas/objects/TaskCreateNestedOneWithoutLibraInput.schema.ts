import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateWithoutLibraInputObjectSchema as TaskCreateWithoutLibraInputObjectSchema } from './TaskCreateWithoutLibraInput.schema';
import { TaskUncheckedCreateWithoutLibraInputObjectSchema as TaskUncheckedCreateWithoutLibraInputObjectSchema } from './TaskUncheckedCreateWithoutLibraInput.schema';
import { TaskCreateOrConnectWithoutLibraInputObjectSchema as TaskCreateOrConnectWithoutLibraInputObjectSchema } from './TaskCreateOrConnectWithoutLibraInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutLibraInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutLibraInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutLibraInputObjectSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional()
}).strict();
export const TaskCreateNestedOneWithoutLibraInputObjectSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutLibraInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateNestedOneWithoutLibraInput>;
export const TaskCreateNestedOneWithoutLibraInputObjectZodSchema = makeSchema();
