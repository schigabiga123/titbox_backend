import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldWhereUniqueInputObjectSchema as TaskFieldWhereUniqueInputObjectSchema } from './TaskFieldWhereUniqueInput.schema';
import { TaskFieldCreateWithoutTaskInputObjectSchema as TaskFieldCreateWithoutTaskInputObjectSchema } from './TaskFieldCreateWithoutTaskInput.schema';
import { TaskFieldUncheckedCreateWithoutTaskInputObjectSchema as TaskFieldUncheckedCreateWithoutTaskInputObjectSchema } from './TaskFieldUncheckedCreateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskFieldWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskFieldCreateWithoutTaskInputObjectSchema), z.lazy(() => TaskFieldUncheckedCreateWithoutTaskInputObjectSchema)])
}).strict();
export const TaskFieldCreateOrConnectWithoutTaskInputObjectSchema: z.ZodType<Prisma.TaskFieldCreateOrConnectWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldCreateOrConnectWithoutTaskInput>;
export const TaskFieldCreateOrConnectWithoutTaskInputObjectZodSchema = makeSchema();
