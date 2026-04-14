import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutLibraInputObjectSchema as TaskCreateWithoutLibraInputObjectSchema } from './TaskCreateWithoutLibraInput.schema';
import { TaskUncheckedCreateWithoutLibraInputObjectSchema as TaskUncheckedCreateWithoutLibraInputObjectSchema } from './TaskUncheckedCreateWithoutLibraInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskCreateWithoutLibraInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutLibraInputObjectSchema)])
}).strict();
export const TaskCreateOrConnectWithoutLibraInputObjectSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutLibraInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateOrConnectWithoutLibraInput>;
export const TaskCreateOrConnectWithoutLibraInputObjectZodSchema = makeSchema();
