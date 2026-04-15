import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StartDeadlineReminderLogWhereInputObjectSchema as StartDeadlineReminderLogWhereInputObjectSchema } from './objects/StartDeadlineReminderLogWhereInput.schema';

export const StartDeadlineReminderLogDeleteManySchema: z.ZodType<Prisma.StartDeadlineReminderLogDeleteManyArgs> = z.object({ where: StartDeadlineReminderLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogDeleteManyArgs>;

export const StartDeadlineReminderLogDeleteManyZodSchema = z.object({ where: StartDeadlineReminderLogWhereInputObjectSchema.optional() }).strict();