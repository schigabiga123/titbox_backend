import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateWithoutStartDeadlineReminderLogsInputObjectSchema as TaskCreateWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskCreateWithoutStartDeadlineReminderLogsInput.schema';
import { TaskUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema as TaskUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskUncheckedCreateWithoutStartDeadlineReminderLogsInput.schema';
import { TaskCreateOrConnectWithoutStartDeadlineReminderLogsInputObjectSchema as TaskCreateOrConnectWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskCreateOrConnectWithoutStartDeadlineReminderLogsInput.schema';
import { TaskUpsertWithoutStartDeadlineReminderLogsInputObjectSchema as TaskUpsertWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskUpsertWithoutStartDeadlineReminderLogsInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateToOneWithWhereWithoutStartDeadlineReminderLogsInputObjectSchema as TaskUpdateToOneWithWhereWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskUpdateToOneWithWhereWithoutStartDeadlineReminderLogsInput.schema';
import { TaskUpdateWithoutStartDeadlineReminderLogsInputObjectSchema as TaskUpdateWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskUpdateWithoutStartDeadlineReminderLogsInput.schema';
import { TaskUncheckedUpdateWithoutStartDeadlineReminderLogsInputObjectSchema as TaskUncheckedUpdateWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskUncheckedUpdateWithoutStartDeadlineReminderLogsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutStartDeadlineReminderLogsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutStartDeadlineReminderLogsInputObjectSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutStartDeadlineReminderLogsInputObjectSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TaskUpdateToOneWithWhereWithoutStartDeadlineReminderLogsInputObjectSchema), z.lazy(() => TaskUpdateWithoutStartDeadlineReminderLogsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutStartDeadlineReminderLogsInputObjectSchema)]).optional()
}).strict();
export const TaskUpdateOneRequiredWithoutStartDeadlineReminderLogsNestedInputObjectSchema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutStartDeadlineReminderLogsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateOneRequiredWithoutStartDeadlineReminderLogsNestedInput>;
export const TaskUpdateOneRequiredWithoutStartDeadlineReminderLogsNestedInputObjectZodSchema = makeSchema();
