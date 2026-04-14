import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldWhereUniqueInputObjectSchema as TaskEventFieldWhereUniqueInputObjectSchema } from './TaskEventFieldWhereUniqueInput.schema';
import { TaskEventFieldUpdateWithoutTaskEventInputObjectSchema as TaskEventFieldUpdateWithoutTaskEventInputObjectSchema } from './TaskEventFieldUpdateWithoutTaskEventInput.schema';
import { TaskEventFieldUncheckedUpdateWithoutTaskEventInputObjectSchema as TaskEventFieldUncheckedUpdateWithoutTaskEventInputObjectSchema } from './TaskEventFieldUncheckedUpdateWithoutTaskEventInput.schema';
import { TaskEventFieldCreateWithoutTaskEventInputObjectSchema as TaskEventFieldCreateWithoutTaskEventInputObjectSchema } from './TaskEventFieldCreateWithoutTaskEventInput.schema';
import { TaskEventFieldUncheckedCreateWithoutTaskEventInputObjectSchema as TaskEventFieldUncheckedCreateWithoutTaskEventInputObjectSchema } from './TaskEventFieldUncheckedCreateWithoutTaskEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskEventFieldWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TaskEventFieldUpdateWithoutTaskEventInputObjectSchema), z.lazy(() => TaskEventFieldUncheckedUpdateWithoutTaskEventInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskEventFieldCreateWithoutTaskEventInputObjectSchema), z.lazy(() => TaskEventFieldUncheckedCreateWithoutTaskEventInputObjectSchema)])
}).strict();
export const TaskEventFieldUpsertWithWhereUniqueWithoutTaskEventInputObjectSchema: z.ZodType<Prisma.TaskEventFieldUpsertWithWhereUniqueWithoutTaskEventInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldUpsertWithWhereUniqueWithoutTaskEventInput>;
export const TaskEventFieldUpsertWithWhereUniqueWithoutTaskEventInputObjectZodSchema = makeSchema();
