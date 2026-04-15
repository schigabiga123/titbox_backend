import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldCreateWithoutLibraInputObjectSchema as TaskFieldCreateWithoutLibraInputObjectSchema } from './TaskFieldCreateWithoutLibraInput.schema';
import { TaskFieldUncheckedCreateWithoutLibraInputObjectSchema as TaskFieldUncheckedCreateWithoutLibraInputObjectSchema } from './TaskFieldUncheckedCreateWithoutLibraInput.schema';
import { TaskFieldCreateOrConnectWithoutLibraInputObjectSchema as TaskFieldCreateOrConnectWithoutLibraInputObjectSchema } from './TaskFieldCreateOrConnectWithoutLibraInput.schema';
import { TaskFieldWhereUniqueInputObjectSchema as TaskFieldWhereUniqueInputObjectSchema } from './TaskFieldWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskFieldCreateWithoutLibraInputObjectSchema), z.lazy(() => TaskFieldUncheckedCreateWithoutLibraInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskFieldCreateOrConnectWithoutLibraInputObjectSchema).optional(),
  connect: z.lazy(() => TaskFieldWhereUniqueInputObjectSchema).optional()
}).strict();
export const TaskFieldCreateNestedOneWithoutLibraInputObjectSchema: z.ZodType<Prisma.TaskFieldCreateNestedOneWithoutLibraInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldCreateNestedOneWithoutLibraInput>;
export const TaskFieldCreateNestedOneWithoutLibraInputObjectZodSchema = makeSchema();
