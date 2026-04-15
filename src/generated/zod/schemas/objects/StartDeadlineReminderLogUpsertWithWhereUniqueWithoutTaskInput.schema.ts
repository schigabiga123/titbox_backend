import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StartDeadlineReminderLogWhereUniqueInputObjectSchema as StartDeadlineReminderLogWhereUniqueInputObjectSchema } from './StartDeadlineReminderLogWhereUniqueInput.schema';
import { StartDeadlineReminderLogUpdateWithoutTaskInputObjectSchema as StartDeadlineReminderLogUpdateWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogUpdateWithoutTaskInput.schema';
import { StartDeadlineReminderLogUncheckedUpdateWithoutTaskInputObjectSchema as StartDeadlineReminderLogUncheckedUpdateWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogUncheckedUpdateWithoutTaskInput.schema';
import { StartDeadlineReminderLogCreateWithoutTaskInputObjectSchema as StartDeadlineReminderLogCreateWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogCreateWithoutTaskInput.schema';
import { StartDeadlineReminderLogUncheckedCreateWithoutTaskInputObjectSchema as StartDeadlineReminderLogUncheckedCreateWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogUncheckedCreateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StartDeadlineReminderLogUpdateWithoutTaskInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUncheckedUpdateWithoutTaskInputObjectSchema)]),
  create: z.union([z.lazy(() => StartDeadlineReminderLogCreateWithoutTaskInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUncheckedCreateWithoutTaskInputObjectSchema)])
}).strict();
export const StartDeadlineReminderLogUpsertWithWhereUniqueWithoutTaskInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogUpsertWithWhereUniqueWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogUpsertWithWhereUniqueWithoutTaskInput>;
export const StartDeadlineReminderLogUpsertWithWhereUniqueWithoutTaskInputObjectZodSchema = makeSchema();
