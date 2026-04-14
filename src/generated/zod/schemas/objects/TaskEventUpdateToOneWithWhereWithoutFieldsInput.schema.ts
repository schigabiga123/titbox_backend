import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventWhereInputObjectSchema as TaskEventWhereInputObjectSchema } from './TaskEventWhereInput.schema';
import { TaskEventUpdateWithoutFieldsInputObjectSchema as TaskEventUpdateWithoutFieldsInputObjectSchema } from './TaskEventUpdateWithoutFieldsInput.schema';
import { TaskEventUncheckedUpdateWithoutFieldsInputObjectSchema as TaskEventUncheckedUpdateWithoutFieldsInputObjectSchema } from './TaskEventUncheckedUpdateWithoutFieldsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskEventWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TaskEventUpdateWithoutFieldsInputObjectSchema), z.lazy(() => TaskEventUncheckedUpdateWithoutFieldsInputObjectSchema)])
}).strict();
export const TaskEventUpdateToOneWithWhereWithoutFieldsInputObjectSchema: z.ZodType<Prisma.TaskEventUpdateToOneWithWhereWithoutFieldsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventUpdateToOneWithWhereWithoutFieldsInput>;
export const TaskEventUpdateToOneWithWhereWithoutFieldsInputObjectZodSchema = makeSchema();
