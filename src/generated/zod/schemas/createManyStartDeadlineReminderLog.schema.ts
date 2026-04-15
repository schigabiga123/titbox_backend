import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StartDeadlineReminderLogCreateManyInputObjectSchema as StartDeadlineReminderLogCreateManyInputObjectSchema } from './objects/StartDeadlineReminderLogCreateManyInput.schema';

export const StartDeadlineReminderLogCreateManySchema: z.ZodType<Prisma.StartDeadlineReminderLogCreateManyArgs> = z.object({ data: z.union([ StartDeadlineReminderLogCreateManyInputObjectSchema, z.array(StartDeadlineReminderLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogCreateManyArgs>;

export const StartDeadlineReminderLogCreateManyZodSchema = z.object({ data: z.union([ StartDeadlineReminderLogCreateManyInputObjectSchema, z.array(StartDeadlineReminderLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();