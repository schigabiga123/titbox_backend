import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema';
import { TaskUpdateWithoutStartDeadlineReminderLogsInputObjectSchema as TaskUpdateWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskUpdateWithoutStartDeadlineReminderLogsInput.schema';
import { TaskUncheckedUpdateWithoutStartDeadlineReminderLogsInputObjectSchema as TaskUncheckedUpdateWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskUncheckedUpdateWithoutStartDeadlineReminderLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TaskUpdateWithoutStartDeadlineReminderLogsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutStartDeadlineReminderLogsInputObjectSchema)])
}).strict();
export const TaskUpdateToOneWithWhereWithoutStartDeadlineReminderLogsInputObjectSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutStartDeadlineReminderLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutStartDeadlineReminderLogsInput>;
export const TaskUpdateToOneWithWhereWithoutStartDeadlineReminderLogsInputObjectZodSchema = makeSchema();
