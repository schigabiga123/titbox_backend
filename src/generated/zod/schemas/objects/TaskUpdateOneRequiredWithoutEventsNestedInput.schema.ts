import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateWithoutEventsInputObjectSchema as TaskCreateWithoutEventsInputObjectSchema } from './TaskCreateWithoutEventsInput.schema';
import { TaskUncheckedCreateWithoutEventsInputObjectSchema as TaskUncheckedCreateWithoutEventsInputObjectSchema } from './TaskUncheckedCreateWithoutEventsInput.schema';
import { TaskCreateOrConnectWithoutEventsInputObjectSchema as TaskCreateOrConnectWithoutEventsInputObjectSchema } from './TaskCreateOrConnectWithoutEventsInput.schema';
import { TaskUpsertWithoutEventsInputObjectSchema as TaskUpsertWithoutEventsInputObjectSchema } from './TaskUpsertWithoutEventsInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateToOneWithWhereWithoutEventsInputObjectSchema as TaskUpdateToOneWithWhereWithoutEventsInputObjectSchema } from './TaskUpdateToOneWithWhereWithoutEventsInput.schema';
import { TaskUpdateWithoutEventsInputObjectSchema as TaskUpdateWithoutEventsInputObjectSchema } from './TaskUpdateWithoutEventsInput.schema';
import { TaskUncheckedUpdateWithoutEventsInputObjectSchema as TaskUncheckedUpdateWithoutEventsInputObjectSchema } from './TaskUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutEventsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TaskUpdateToOneWithWhereWithoutEventsInputObjectSchema), z.lazy(() => TaskUpdateWithoutEventsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutEventsInputObjectSchema)]).optional()
}).strict();
export const TaskUpdateOneRequiredWithoutEventsNestedInputObjectSchema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateOneRequiredWithoutEventsNestedInput>;
export const TaskUpdateOneRequiredWithoutEventsNestedInputObjectZodSchema = makeSchema();
