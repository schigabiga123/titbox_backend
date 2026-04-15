import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StartDeadlineReminderLogWhereUniqueInputObjectSchema as StartDeadlineReminderLogWhereUniqueInputObjectSchema } from './StartDeadlineReminderLogWhereUniqueInput.schema';
import { StartDeadlineReminderLogUpdateWithoutProjectInputObjectSchema as StartDeadlineReminderLogUpdateWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogUpdateWithoutProjectInput.schema';
import { StartDeadlineReminderLogUncheckedUpdateWithoutProjectInputObjectSchema as StartDeadlineReminderLogUncheckedUpdateWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogUncheckedUpdateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StartDeadlineReminderLogUpdateWithoutProjectInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUncheckedUpdateWithoutProjectInputObjectSchema)])
}).strict();
export const StartDeadlineReminderLogUpdateWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogUpdateWithWhereUniqueWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogUpdateWithWhereUniqueWithoutProjectInput>;
export const StartDeadlineReminderLogUpdateWithWhereUniqueWithoutProjectInputObjectZodSchema = makeSchema();
