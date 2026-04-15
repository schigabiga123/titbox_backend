import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StartDeadlineReminderLogSelectObjectSchema as StartDeadlineReminderLogSelectObjectSchema } from './objects/StartDeadlineReminderLogSelect.schema';
import { StartDeadlineReminderLogIncludeObjectSchema as StartDeadlineReminderLogIncludeObjectSchema } from './objects/StartDeadlineReminderLogInclude.schema';
import { StartDeadlineReminderLogUpdateInputObjectSchema as StartDeadlineReminderLogUpdateInputObjectSchema } from './objects/StartDeadlineReminderLogUpdateInput.schema';
import { StartDeadlineReminderLogUncheckedUpdateInputObjectSchema as StartDeadlineReminderLogUncheckedUpdateInputObjectSchema } from './objects/StartDeadlineReminderLogUncheckedUpdateInput.schema';
import { StartDeadlineReminderLogWhereUniqueInputObjectSchema as StartDeadlineReminderLogWhereUniqueInputObjectSchema } from './objects/StartDeadlineReminderLogWhereUniqueInput.schema';

export const StartDeadlineReminderLogUpdateOneSchema: z.ZodType<Prisma.StartDeadlineReminderLogUpdateArgs> = z.object({ select: StartDeadlineReminderLogSelectObjectSchema.optional(), include: StartDeadlineReminderLogIncludeObjectSchema.optional(), data: z.union([StartDeadlineReminderLogUpdateInputObjectSchema, StartDeadlineReminderLogUncheckedUpdateInputObjectSchema]), where: StartDeadlineReminderLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogUpdateArgs>;

export const StartDeadlineReminderLogUpdateOneZodSchema = z.object({ select: StartDeadlineReminderLogSelectObjectSchema.optional(), include: StartDeadlineReminderLogIncludeObjectSchema.optional(), data: z.union([StartDeadlineReminderLogUpdateInputObjectSchema, StartDeadlineReminderLogUncheckedUpdateInputObjectSchema]), where: StartDeadlineReminderLogWhereUniqueInputObjectSchema }).strict();