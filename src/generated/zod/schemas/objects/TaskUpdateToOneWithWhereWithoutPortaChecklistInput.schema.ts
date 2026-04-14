import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema';
import { TaskUpdateWithoutPortaChecklistInputObjectSchema as TaskUpdateWithoutPortaChecklistInputObjectSchema } from './TaskUpdateWithoutPortaChecklistInput.schema';
import { TaskUncheckedUpdateWithoutPortaChecklistInputObjectSchema as TaskUncheckedUpdateWithoutPortaChecklistInputObjectSchema } from './TaskUncheckedUpdateWithoutPortaChecklistInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TaskUpdateWithoutPortaChecklistInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutPortaChecklistInputObjectSchema)])
}).strict();
export const TaskUpdateToOneWithWhereWithoutPortaChecklistInputObjectSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutPortaChecklistInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutPortaChecklistInput>;
export const TaskUpdateToOneWithWhereWithoutPortaChecklistInputObjectZodSchema = makeSchema();
