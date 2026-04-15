import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StartDeadlineReminderLogWhereUniqueInputObjectSchema as StartDeadlineReminderLogWhereUniqueInputObjectSchema } from './StartDeadlineReminderLogWhereUniqueInput.schema';
import { StartDeadlineReminderLogCreateWithoutTaskInputObjectSchema as StartDeadlineReminderLogCreateWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogCreateWithoutTaskInput.schema';
import { StartDeadlineReminderLogUncheckedCreateWithoutTaskInputObjectSchema as StartDeadlineReminderLogUncheckedCreateWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogUncheckedCreateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StartDeadlineReminderLogCreateWithoutTaskInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUncheckedCreateWithoutTaskInputObjectSchema)])
}).strict();
export const StartDeadlineReminderLogCreateOrConnectWithoutTaskInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogCreateOrConnectWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogCreateOrConnectWithoutTaskInput>;
export const StartDeadlineReminderLogCreateOrConnectWithoutTaskInputObjectZodSchema = makeSchema();
