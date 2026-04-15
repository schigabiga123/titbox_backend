import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StartDeadlineReminderLogSelectObjectSchema as StartDeadlineReminderLogSelectObjectSchema } from './objects/StartDeadlineReminderLogSelect.schema';
import { StartDeadlineReminderLogIncludeObjectSchema as StartDeadlineReminderLogIncludeObjectSchema } from './objects/StartDeadlineReminderLogInclude.schema';
import { StartDeadlineReminderLogWhereUniqueInputObjectSchema as StartDeadlineReminderLogWhereUniqueInputObjectSchema } from './objects/StartDeadlineReminderLogWhereUniqueInput.schema';

export const StartDeadlineReminderLogDeleteOneSchema: z.ZodType<Prisma.StartDeadlineReminderLogDeleteArgs> = z.object({ select: StartDeadlineReminderLogSelectObjectSchema.optional(), include: StartDeadlineReminderLogIncludeObjectSchema.optional(), where: StartDeadlineReminderLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogDeleteArgs>;

export const StartDeadlineReminderLogDeleteOneZodSchema = z.object({ select: StartDeadlineReminderLogSelectObjectSchema.optional(), include: StartDeadlineReminderLogIncludeObjectSchema.optional(), where: StartDeadlineReminderLogWhereUniqueInputObjectSchema }).strict();