import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskUpdateWithoutPortaChecklistInputObjectSchema as TaskUpdateWithoutPortaChecklistInputObjectSchema } from './TaskUpdateWithoutPortaChecklistInput.schema';
import { TaskUncheckedUpdateWithoutPortaChecklistInputObjectSchema as TaskUncheckedUpdateWithoutPortaChecklistInputObjectSchema } from './TaskUncheckedUpdateWithoutPortaChecklistInput.schema';
import { TaskCreateWithoutPortaChecklistInputObjectSchema as TaskCreateWithoutPortaChecklistInputObjectSchema } from './TaskCreateWithoutPortaChecklistInput.schema';
import { TaskUncheckedCreateWithoutPortaChecklistInputObjectSchema as TaskUncheckedCreateWithoutPortaChecklistInputObjectSchema } from './TaskUncheckedCreateWithoutPortaChecklistInput.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TaskUpdateWithoutPortaChecklistInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutPortaChecklistInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskCreateWithoutPortaChecklistInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutPortaChecklistInputObjectSchema)]),
  where: z.lazy(() => TaskWhereInputObjectSchema).optional()
}).strict();
export const TaskUpsertWithoutPortaChecklistInputObjectSchema: z.ZodType<Prisma.TaskUpsertWithoutPortaChecklistInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpsertWithoutPortaChecklistInput>;
export const TaskUpsertWithoutPortaChecklistInputObjectZodSchema = makeSchema();
