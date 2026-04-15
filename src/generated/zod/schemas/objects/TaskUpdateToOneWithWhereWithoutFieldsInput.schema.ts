import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema';
import { TaskUpdateWithoutFieldsInputObjectSchema as TaskUpdateWithoutFieldsInputObjectSchema } from './TaskUpdateWithoutFieldsInput.schema';
import { TaskUncheckedUpdateWithoutFieldsInputObjectSchema as TaskUncheckedUpdateWithoutFieldsInputObjectSchema } from './TaskUncheckedUpdateWithoutFieldsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TaskUpdateWithoutFieldsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutFieldsInputObjectSchema)])
}).strict();
export const TaskUpdateToOneWithWhereWithoutFieldsInputObjectSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutFieldsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutFieldsInput>;
export const TaskUpdateToOneWithWhereWithoutFieldsInputObjectZodSchema = makeSchema();
