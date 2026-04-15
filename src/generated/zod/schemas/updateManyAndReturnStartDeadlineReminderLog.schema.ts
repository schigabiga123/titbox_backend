import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StartDeadlineReminderLogSelectObjectSchema as StartDeadlineReminderLogSelectObjectSchema } from './objects/StartDeadlineReminderLogSelect.schema';
import { StartDeadlineReminderLogUpdateManyMutationInputObjectSchema as StartDeadlineReminderLogUpdateManyMutationInputObjectSchema } from './objects/StartDeadlineReminderLogUpdateManyMutationInput.schema';
import { StartDeadlineReminderLogWhereInputObjectSchema as StartDeadlineReminderLogWhereInputObjectSchema } from './objects/StartDeadlineReminderLogWhereInput.schema';

export const StartDeadlineReminderLogUpdateManyAndReturnSchema: z.ZodType<Prisma.StartDeadlineReminderLogUpdateManyAndReturnArgs> = z.object({ select: StartDeadlineReminderLogSelectObjectSchema.optional(), data: StartDeadlineReminderLogUpdateManyMutationInputObjectSchema, where: StartDeadlineReminderLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogUpdateManyAndReturnArgs>;

export const StartDeadlineReminderLogUpdateManyAndReturnZodSchema = z.object({ select: StartDeadlineReminderLogSelectObjectSchema.optional(), data: StartDeadlineReminderLogUpdateManyMutationInputObjectSchema, where: StartDeadlineReminderLogWhereInputObjectSchema.optional() }).strict();