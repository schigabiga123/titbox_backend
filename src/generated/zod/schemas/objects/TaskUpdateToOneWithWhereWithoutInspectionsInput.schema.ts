import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema';
import { TaskUpdateWithoutInspectionsInputObjectSchema as TaskUpdateWithoutInspectionsInputObjectSchema } from './TaskUpdateWithoutInspectionsInput.schema';
import { TaskUncheckedUpdateWithoutInspectionsInputObjectSchema as TaskUncheckedUpdateWithoutInspectionsInputObjectSchema } from './TaskUncheckedUpdateWithoutInspectionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TaskUpdateWithoutInspectionsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutInspectionsInputObjectSchema)])
}).strict();
export const TaskUpdateToOneWithWhereWithoutInspectionsInputObjectSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutInspectionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutInspectionsInput>;
export const TaskUpdateToOneWithWhereWithoutInspectionsInputObjectZodSchema = makeSchema();
