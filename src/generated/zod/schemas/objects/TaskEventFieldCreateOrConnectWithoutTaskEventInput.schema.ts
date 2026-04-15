import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldWhereUniqueInputObjectSchema as TaskEventFieldWhereUniqueInputObjectSchema } from './TaskEventFieldWhereUniqueInput.schema';
import { TaskEventFieldCreateWithoutTaskEventInputObjectSchema as TaskEventFieldCreateWithoutTaskEventInputObjectSchema } from './TaskEventFieldCreateWithoutTaskEventInput.schema';
import { TaskEventFieldUncheckedCreateWithoutTaskEventInputObjectSchema as TaskEventFieldUncheckedCreateWithoutTaskEventInputObjectSchema } from './TaskEventFieldUncheckedCreateWithoutTaskEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskEventFieldWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskEventFieldCreateWithoutTaskEventInputObjectSchema), z.lazy(() => TaskEventFieldUncheckedCreateWithoutTaskEventInputObjectSchema)])
}).strict();
export const TaskEventFieldCreateOrConnectWithoutTaskEventInputObjectSchema: z.ZodType<Prisma.TaskEventFieldCreateOrConnectWithoutTaskEventInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldCreateOrConnectWithoutTaskEventInput>;
export const TaskEventFieldCreateOrConnectWithoutTaskEventInputObjectZodSchema = makeSchema();
