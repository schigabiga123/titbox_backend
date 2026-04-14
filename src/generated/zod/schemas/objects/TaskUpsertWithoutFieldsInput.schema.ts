import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskUpdateWithoutFieldsInputObjectSchema as TaskUpdateWithoutFieldsInputObjectSchema } from './TaskUpdateWithoutFieldsInput.schema';
import { TaskUncheckedUpdateWithoutFieldsInputObjectSchema as TaskUncheckedUpdateWithoutFieldsInputObjectSchema } from './TaskUncheckedUpdateWithoutFieldsInput.schema';
import { TaskCreateWithoutFieldsInputObjectSchema as TaskCreateWithoutFieldsInputObjectSchema } from './TaskCreateWithoutFieldsInput.schema';
import { TaskUncheckedCreateWithoutFieldsInputObjectSchema as TaskUncheckedCreateWithoutFieldsInputObjectSchema } from './TaskUncheckedCreateWithoutFieldsInput.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TaskUpdateWithoutFieldsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutFieldsInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskCreateWithoutFieldsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutFieldsInputObjectSchema)]),
  where: z.lazy(() => TaskWhereInputObjectSchema).optional()
}).strict();
export const TaskUpsertWithoutFieldsInputObjectSchema: z.ZodType<Prisma.TaskUpsertWithoutFieldsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpsertWithoutFieldsInput>;
export const TaskUpsertWithoutFieldsInputObjectZodSchema = makeSchema();
