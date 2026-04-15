import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StartDeadlineReminderLogWhereUniqueInputObjectSchema as StartDeadlineReminderLogWhereUniqueInputObjectSchema } from './StartDeadlineReminderLogWhereUniqueInput.schema';
import { StartDeadlineReminderLogUpdateWithoutTaskInputObjectSchema as StartDeadlineReminderLogUpdateWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogUpdateWithoutTaskInput.schema';
import { StartDeadlineReminderLogUncheckedUpdateWithoutTaskInputObjectSchema as StartDeadlineReminderLogUncheckedUpdateWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogUncheckedUpdateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StartDeadlineReminderLogUpdateWithoutTaskInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUncheckedUpdateWithoutTaskInputObjectSchema)])
}).strict();
export const StartDeadlineReminderLogUpdateWithWhereUniqueWithoutTaskInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogUpdateWithWhereUniqueWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogUpdateWithWhereUniqueWithoutTaskInput>;
export const StartDeadlineReminderLogUpdateWithWhereUniqueWithoutTaskInputObjectZodSchema = makeSchema();
