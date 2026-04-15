import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateWithoutStartDeadlineReminderLogsInputObjectSchema as TaskCreateWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskCreateWithoutStartDeadlineReminderLogsInput.schema';
import { TaskUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema as TaskUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskUncheckedCreateWithoutStartDeadlineReminderLogsInput.schema';
import { TaskCreateOrConnectWithoutStartDeadlineReminderLogsInputObjectSchema as TaskCreateOrConnectWithoutStartDeadlineReminderLogsInputObjectSchema } from './TaskCreateOrConnectWithoutStartDeadlineReminderLogsInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutStartDeadlineReminderLogsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutStartDeadlineReminderLogsInputObjectSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional()
}).strict();
export const TaskCreateNestedOneWithoutStartDeadlineReminderLogsInputObjectSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutStartDeadlineReminderLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateNestedOneWithoutStartDeadlineReminderLogsInput>;
export const TaskCreateNestedOneWithoutStartDeadlineReminderLogsInputObjectZodSchema = makeSchema();
