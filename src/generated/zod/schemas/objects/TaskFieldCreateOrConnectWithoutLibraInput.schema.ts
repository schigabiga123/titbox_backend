import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldWhereUniqueInputObjectSchema as TaskFieldWhereUniqueInputObjectSchema } from './TaskFieldWhereUniqueInput.schema';
import { TaskFieldCreateWithoutLibraInputObjectSchema as TaskFieldCreateWithoutLibraInputObjectSchema } from './TaskFieldCreateWithoutLibraInput.schema';
import { TaskFieldUncheckedCreateWithoutLibraInputObjectSchema as TaskFieldUncheckedCreateWithoutLibraInputObjectSchema } from './TaskFieldUncheckedCreateWithoutLibraInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskFieldWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskFieldCreateWithoutLibraInputObjectSchema), z.lazy(() => TaskFieldUncheckedCreateWithoutLibraInputObjectSchema)])
}).strict();
export const TaskFieldCreateOrConnectWithoutLibraInputObjectSchema: z.ZodType<Prisma.TaskFieldCreateOrConnectWithoutLibraInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldCreateOrConnectWithoutLibraInput>;
export const TaskFieldCreateOrConnectWithoutLibraInputObjectZodSchema = makeSchema();
