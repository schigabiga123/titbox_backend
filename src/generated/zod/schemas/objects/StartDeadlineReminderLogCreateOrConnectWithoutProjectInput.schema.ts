import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StartDeadlineReminderLogWhereUniqueInputObjectSchema as StartDeadlineReminderLogWhereUniqueInputObjectSchema } from './StartDeadlineReminderLogWhereUniqueInput.schema';
import { StartDeadlineReminderLogCreateWithoutProjectInputObjectSchema as StartDeadlineReminderLogCreateWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogCreateWithoutProjectInput.schema';
import { StartDeadlineReminderLogUncheckedCreateWithoutProjectInputObjectSchema as StartDeadlineReminderLogUncheckedCreateWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogUncheckedCreateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StartDeadlineReminderLogCreateWithoutProjectInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const StartDeadlineReminderLogCreateOrConnectWithoutProjectInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogCreateOrConnectWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogCreateOrConnectWithoutProjectInput>;
export const StartDeadlineReminderLogCreateOrConnectWithoutProjectInputObjectZodSchema = makeSchema();
