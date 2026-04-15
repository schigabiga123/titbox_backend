import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutStartDeadlineReminderLogsInputObjectSchema as TaskCreateWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskCreateWithoutStartDeadlineReminderLogsInput.schema';
import { TaskUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema as TaskUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskUncheckedCreateWithoutStartDeadlineReminderLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskCreateWithoutStartDeadlineReminderLogsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema)])
}).strict();
export const TaskCreateOrConnectWithoutStartDeadlineReminderLogsInputObjectSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutStartDeadlineReminderLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateOrConnectWithoutStartDeadlineReminderLogsInput>;
export const TaskCreateOrConnectWithoutStartDeadlineReminderLogsInputObjectZodSchema = makeSchema();
