import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskUpdateWithoutStartDeadlineReminderLogsInputObjectSchema as TaskUpdateWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskUpdateWithoutStartDeadlineReminderLogsInput.schema';
import { TaskUncheckedUpdateWithoutStartDeadlineReminderLogsInputObjectSchema as TaskUncheckedUpdateWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskUncheckedUpdateWithoutStartDeadlineReminderLogsInput.schema';
import { TaskCreateWithoutStartDeadlineReminderLogsInputObjectSchema as TaskCreateWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskCreateWithoutStartDeadlineReminderLogsInput.schema';
import { TaskUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema as TaskUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskUncheckedCreateWithoutStartDeadlineReminderLogsInput.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TaskUpdateWithoutStartDeadlineReminderLogsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutStartDeadlineReminderLogsInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskCreateWithoutStartDeadlineReminderLogsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema)]),
  where: z.lazy(() => TaskWhereInputObjectSchema).optional()
}).strict();
export const TaskUpsertWithoutStartDeadlineReminderLogsInputObjectSchema: z.ZodType<Prisma.TaskUpsertWithoutStartDeadlineReminderLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpsertWithoutStartDeadlineReminderLogsInput>;
export const TaskUpsertWithoutStartDeadlineReminderLogsInputObjectZodSchema = makeSchema();
