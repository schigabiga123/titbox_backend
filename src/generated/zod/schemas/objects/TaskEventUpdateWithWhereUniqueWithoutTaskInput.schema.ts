import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventWhereUniqueInputObjectSchema as TaskEventWhereUniqueInputObjectSchema } from './TaskEventWhereUniqueInput.schema';
import { TaskEventUpdateWithoutTaskInputObjectSchema as TaskEventUpdateWithoutTaskInputObjectSchema } from './TaskEventUpdateWithoutTaskInput.schema';
import { TaskEventUncheckedUpdateWithoutTaskInputObjectSchema as TaskEventUncheckedUpdateWithoutTaskInputObjectSchema } from './TaskEventUncheckedUpdateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskEventWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TaskEventUpdateWithoutTaskInputObjectSchema), z.lazy(() => TaskEventUncheckedUpdateWithoutTaskInputObjectSchema)])
}).strict();
export const TaskEventUpdateWithWhereUniqueWithoutTaskInputObjectSchema: z.ZodType<Prisma.TaskEventUpdateWithWhereUniqueWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventUpdateWithWhereUniqueWithoutTaskInput>;
export const TaskEventUpdateWithWhereUniqueWithoutTaskInputObjectZodSchema = makeSchema();
