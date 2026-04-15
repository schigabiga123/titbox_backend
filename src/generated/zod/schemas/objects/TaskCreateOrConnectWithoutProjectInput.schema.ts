import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutProjectInputObjectSchema as TaskCreateWithoutProjectInputObjectSchema } from './TaskCreateWithoutProjectInput.schema';
import { TaskUncheckedCreateWithoutProjectInputObjectSchema as TaskUncheckedCreateWithoutProjectInputObjectSchema } from './TaskUncheckedCreateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskCreateWithoutProjectInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const TaskCreateOrConnectWithoutProjectInputObjectSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateOrConnectWithoutProjectInput>;
export const TaskCreateOrConnectWithoutProjectInputObjectZodSchema = makeSchema();
