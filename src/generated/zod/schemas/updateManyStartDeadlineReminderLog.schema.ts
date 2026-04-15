import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StartDeadlineReminderLogUpdateManyMutationInputObjectSchema as StartDeadlineReminderLogUpdateManyMutationInputObjectSchema } from './objects/StartDeadlineReminderLogUpdateManyMutationInput.schema';
import { StartDeadlineReminderLogWhereInputObjectSchema as StartDeadlineReminderLogWhereInputObjectSchema } from './objects/StartDeadlineReminderLogWhereInput.schema';

export const StartDeadlineReminderLogUpdateManySchema: z.ZodType<Prisma.StartDeadlineReminderLogUpdateManyArgs> = z.object({ data: StartDeadlineReminderLogUpdateManyMutationInputObjectSchema, where: StartDeadlineReminderLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogUpdateManyArgs>;

export const StartDeadlineReminderLogUpdateManyZodSchema = z.object({ data: StartDeadlineReminderLogUpdateManyMutationInputObjectSchema, where: StartDeadlineReminderLogWhereInputObjectSchema.optional() }).strict();