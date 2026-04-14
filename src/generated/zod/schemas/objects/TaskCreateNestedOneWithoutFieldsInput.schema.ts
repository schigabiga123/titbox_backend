import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateWithoutFieldsInputObjectSchema as TaskCreateWithoutFieldsInputObjectSchema } from './TaskCreateWithoutFieldsInput.schema';
import { TaskUncheckedCreateWithoutFieldsInputObjectSchema as TaskUncheckedCreateWithoutFieldsInputObjectSchema } from './TaskUncheckedCreateWithoutFieldsInput.schema';
import { TaskCreateOrConnectWithoutFieldsInputObjectSchema as TaskCreateOrConnectWithoutFieldsInputObjectSchema } from './TaskCreateOrConnectWithoutFieldsInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutFieldsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutFieldsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutFieldsInputObjectSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional()
}).strict();
export const TaskCreateNestedOneWithoutFieldsInputObjectSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutFieldsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateNestedOneWithoutFieldsInput>;
export const TaskCreateNestedOneWithoutFieldsInputObjectZodSchema = makeSchema();
