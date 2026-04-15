import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StartDeadlineReminderLogWhereInputObjectSchema as StartDeadlineReminderLogWhereInputObjectSchema } from './StartDeadlineReminderLogWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => StartDeadlineReminderLogWhereInputObjectSchema).optional(),
  some: z.lazy(() => StartDeadlineReminderLogWhereInputObjectSchema).optional(),
  none: z.lazy(() => StartDeadlineReminderLogWhereInputObjectSchema).optional()
}).strict();
export const StartDeadlineReminderLogListRelationFilterObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogListRelationFilter>;
export const StartDeadlineReminderLogListRelationFilterObjectZodSchema = makeSchema();
