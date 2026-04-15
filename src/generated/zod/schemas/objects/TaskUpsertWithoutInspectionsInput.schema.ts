import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskUpdateWithoutInspectionsInputObjectSchema as TaskUpdateWithoutInspectionsInputObjectSchema } from './TaskUpdateWithoutInspectionsInput.schema';
import { TaskUncheckedUpdateWithoutInspectionsInputObjectSchema as TaskUncheckedUpdateWithoutInspectionsInputObjectSchema } from './TaskUncheckedUpdateWithoutInspectionsInput.schema';
import { TaskCreateWithoutInspectionsInputObjectSchema as TaskCreateWithoutInspectionsInputObjectSchema } from './TaskCreateWithoutInspectionsInput.schema';
import { TaskUncheckedCreateWithoutInspectionsInputObjectSchema as TaskUncheckedCreateWithoutInspectionsInputObjectSchema } from './TaskUncheckedCreateWithoutInspectionsInput.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TaskUpdateWithoutInspectionsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutInspectionsInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskCreateWithoutInspectionsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutInspectionsInputObjectSchema)]),
  where: z.lazy(() => TaskWhereInputObjectSchema).optional()
}).strict();
export const TaskUpsertWithoutInspectionsInputObjectSchema: z.ZodType<Prisma.TaskUpsertWithoutInspectionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpsertWithoutInspectionsInput>;
export const TaskUpsertWithoutInspectionsInputObjectZodSchema = makeSchema();
