import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskUpdateWithoutEventsInputObjectSchema as TaskUpdateWithoutEventsInputObjectSchema } from './TaskUpdateWithoutEventsInput.schema';
import { TaskUncheckedUpdateWithoutEventsInputObjectSchema as TaskUncheckedUpdateWithoutEventsInputObjectSchema } from './TaskUncheckedUpdateWithoutEventsInput.schema';
import { TaskCreateWithoutEventsInputObjectSchema as TaskCreateWithoutEventsInputObjectSchema } from './TaskCreateWithoutEventsInput.schema';
import { TaskUncheckedCreateWithoutEventsInputObjectSchema as TaskUncheckedCreateWithoutEventsInputObjectSchema } from './TaskUncheckedCreateWithoutEventsInput.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TaskUpdateWithoutEventsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskCreateWithoutEventsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutEventsInputObjectSchema)]),
  where: z.lazy(() => TaskWhereInputObjectSchema).optional()
}).strict();
export const TaskUpsertWithoutEventsInputObjectSchema: z.ZodType<Prisma.TaskUpsertWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpsertWithoutEventsInput>;
export const TaskUpsertWithoutEventsInputObjectZodSchema = makeSchema();
