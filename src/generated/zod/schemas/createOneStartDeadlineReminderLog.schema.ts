import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StartDeadlineReminderLogSelectObjectSchema as StartDeadlineReminderLogSelectObjectSchema } from './objects/StartDeadlineReminderLogSelect.schema';
import { StartDeadlineReminderLogIncludeObjectSchema as StartDeadlineReminderLogIncludeObjectSchema } from './objects/StartDeadlineReminderLogInclude.schema';
import { StartDeadlineReminderLogCreateInputObjectSchema as StartDeadlineReminderLogCreateInputObjectSchema } from './objects/StartDeadlineReminderLogCreateInput.schema';
import { StartDeadlineReminderLogUncheckedCreateInputObjectSchema as StartDeadlineReminderLogUncheckedCreateInputObjectSchema } from './objects/StartDeadlineReminderLogUncheckedCreateInput.schema';

export const StartDeadlineReminderLogCreateOneSchema: z.ZodType<Prisma.StartDeadlineReminderLogCreateArgs> = z.object({ select: StartDeadlineReminderLogSelectObjectSchema.optional(), include: StartDeadlineReminderLogIncludeObjectSchema.optional(), data: z.union([StartDeadlineReminderLogCreateInputObjectSchema, StartDeadlineReminderLogUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogCreateArgs>;

export const StartDeadlineReminderLogCreateOneZodSchema = z.object({ select: StartDeadlineReminderLogSelectObjectSchema.optional(), include: StartDeadlineReminderLogIncludeObjectSchema.optional(), data: z.union([StartDeadlineReminderLogCreateInputObjectSchema, StartDeadlineReminderLogUncheckedCreateInputObjectSchema]) }).strict();