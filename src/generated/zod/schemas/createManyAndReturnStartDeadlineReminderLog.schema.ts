import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StartDeadlineReminderLogSelectObjectSchema as StartDeadlineReminderLogSelectObjectSchema } from './objects/StartDeadlineReminderLogSelect.schema';
import { StartDeadlineReminderLogCreateManyInputObjectSchema as StartDeadlineReminderLogCreateManyInputObjectSchema } from './objects/StartDeadlineReminderLogCreateManyInput.schema';

export const StartDeadlineReminderLogCreateManyAndReturnSchema: z.ZodType<Prisma.StartDeadlineReminderLogCreateManyAndReturnArgs> = z.object({ select: StartDeadlineReminderLogSelectObjectSchema.optional(), data: z.union([ StartDeadlineReminderLogCreateManyInputObjectSchema, z.array(StartDeadlineReminderLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogCreateManyAndReturnArgs>;

export const StartDeadlineReminderLogCreateManyAndReturnZodSchema = z.object({ select: StartDeadlineReminderLogSelectObjectSchema.optional(), data: z.union([ StartDeadlineReminderLogCreateManyInputObjectSchema, z.array(StartDeadlineReminderLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();