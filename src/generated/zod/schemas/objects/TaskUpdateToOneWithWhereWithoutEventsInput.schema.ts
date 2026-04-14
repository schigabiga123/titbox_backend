import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema';
import { TaskUpdateWithoutEventsInputObjectSchema as TaskUpdateWithoutEventsInputObjectSchema } from './TaskUpdateWithoutEventsInput.schema';
import { TaskUncheckedUpdateWithoutEventsInputObjectSchema as TaskUncheckedUpdateWithoutEventsInputObjectSchema } from './TaskUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TaskUpdateWithoutEventsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutEventsInputObjectSchema)])
}).strict();
export const TaskUpdateToOneWithWhereWithoutEventsInputObjectSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutEventsInput>;
export const TaskUpdateToOneWithWhereWithoutEventsInputObjectZodSchema = makeSchema();
