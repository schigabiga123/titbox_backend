import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutFieldsInputObjectSchema as TaskCreateWithoutFieldsInputObjectSchema } from './TaskCreateWithoutFieldsInput.schema';
import { TaskUncheckedCreateWithoutFieldsInputObjectSchema as TaskUncheckedCreateWithoutFieldsInputObjectSchema } from './TaskUncheckedCreateWithoutFieldsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskCreateWithoutFieldsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutFieldsInputObjectSchema)])
}).strict();
export const TaskCreateOrConnectWithoutFieldsInputObjectSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutFieldsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateOrConnectWithoutFieldsInput>;
export const TaskCreateOrConnectWithoutFieldsInputObjectZodSchema = makeSchema();
