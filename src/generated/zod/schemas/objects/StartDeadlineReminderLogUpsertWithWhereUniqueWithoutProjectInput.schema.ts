import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StartDeadlineReminderLogWhereUniqueInputObjectSchema as StartDeadlineReminderLogWhereUniqueInputObjectSchema } from './StartDeadlineReminderLogWhereUniqueInput.schema';
import { StartDeadlineReminderLogUpdateWithoutProjectInputObjectSchema as StartDeadlineReminderLogUpdateWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogUpdateWithoutProjectInput.schema';
import { StartDeadlineReminderLogUncheckedUpdateWithoutProjectInputObjectSchema as StartDeadlineReminderLogUncheckedUpdateWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogUncheckedUpdateWithoutProjectInput.schema';
import { StartDeadlineReminderLogCreateWithoutProjectInputObjectSchema as StartDeadlineReminderLogCreateWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogCreateWithoutProjectInput.schema';
import { StartDeadlineReminderLogUncheckedCreateWithoutProjectInputObjectSchema as StartDeadlineReminderLogUncheckedCreateWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogUncheckedCreateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StartDeadlineReminderLogUpdateWithoutProjectInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUncheckedUpdateWithoutProjectInputObjectSchema)]),
  create: z.union([z.lazy(() => StartDeadlineReminderLogCreateWithoutProjectInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const StartDeadlineReminderLogUpsertWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogUpsertWithWhereUniqueWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogUpsertWithWhereUniqueWithoutProjectInput>;
export const StartDeadlineReminderLogUpsertWithWhereUniqueWithoutProjectInputObjectZodSchema = makeSchema();
