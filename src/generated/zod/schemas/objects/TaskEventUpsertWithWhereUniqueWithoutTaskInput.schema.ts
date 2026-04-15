import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventWhereUniqueInputObjectSchema as TaskEventWhereUniqueInputObjectSchema } from './TaskEventWhereUniqueInput.schema';
import { TaskEventUpdateWithoutTaskInputObjectSchema as TaskEventUpdateWithoutTaskInputObjectSchema } from './TaskEventUpdateWithoutTaskInput.schema';
import { TaskEventUncheckedUpdateWithoutTaskInputObjectSchema as TaskEventUncheckedUpdateWithoutTaskInputObjectSchema } from './TaskEventUncheckedUpdateWithoutTaskInput.schema';
import { TaskEventCreateWithoutTaskInputObjectSchema as TaskEventCreateWithoutTaskInputObjectSchema } from './TaskEventCreateWithoutTaskInput.schema';
import { TaskEventUncheckedCreateWithoutTaskInputObjectSchema as TaskEventUncheckedCreateWithoutTaskInputObjectSchema } from './TaskEventUncheckedCreateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskEventWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TaskEventUpdateWithoutTaskInputObjectSchema), z.lazy(() => TaskEventUncheckedUpdateWithoutTaskInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskEventCreateWithoutTaskInputObjectSchema), z.lazy(() => TaskEventUncheckedCreateWithoutTaskInputObjectSchema)])
}).strict();
export const TaskEventUpsertWithWhereUniqueWithoutTaskInputObjectSchema: z.ZodType<Prisma.TaskEventUpsertWithWhereUniqueWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventUpsertWithWhereUniqueWithoutTaskInput>;
export const TaskEventUpsertWithWhereUniqueWithoutTaskInputObjectZodSchema = makeSchema();
