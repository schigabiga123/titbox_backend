import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const StartDeadlineReminderLogWhereUniqueInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogWhereUniqueInput>;
export const StartDeadlineReminderLogWhereUniqueInputObjectZodSchema = makeSchema();
