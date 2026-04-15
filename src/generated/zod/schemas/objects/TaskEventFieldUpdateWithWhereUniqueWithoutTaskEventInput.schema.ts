import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldWhereUniqueInputObjectSchema as TaskEventFieldWhereUniqueInputObjectSchema } from './TaskEventFieldWhereUniqueInput.schema';
import { TaskEventFieldUpdateWithoutTaskEventInputObjectSchema as TaskEventFieldUpdateWithoutTaskEventInputObjectSchema } from './TaskEventFieldUpdateWithoutTaskEventInput.schema';
import { TaskEventFieldUncheckedUpdateWithoutTaskEventInputObjectSchema as TaskEventFieldUncheckedUpdateWithoutTaskEventInputObjectSchema } from './TaskEventFieldUncheckedUpdateWithoutTaskEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskEventFieldWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TaskEventFieldUpdateWithoutTaskEventInputObjectSchema), z.lazy(() => TaskEventFieldUncheckedUpdateWithoutTaskEventInputObjectSchema)])
}).strict();
export const TaskEventFieldUpdateWithWhereUniqueWithoutTaskEventInputObjectSchema: z.ZodType<Prisma.TaskEventFieldUpdateWithWhereUniqueWithoutTaskEventInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldUpdateWithWhereUniqueWithoutTaskEventInput>;
export const TaskEventFieldUpdateWithWhereUniqueWithoutTaskEventInputObjectZodSchema = makeSchema();
