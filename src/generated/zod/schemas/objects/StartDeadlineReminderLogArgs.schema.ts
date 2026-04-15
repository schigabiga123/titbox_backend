import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StartDeadlineReminderLogSelectObjectSchema as StartDeadlineReminderLogSelectObjectSchema } from './StartDeadlineReminderLogSelect.schema';
import { StartDeadlineReminderLogIncludeObjectSchema as StartDeadlineReminderLogIncludeObjectSchema } from './StartDeadlineReminderLogInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StartDeadlineReminderLogSelectObjectSchema).optional(),
  include: z.lazy(() => StartDeadlineReminderLogIncludeObjectSchema).optional()
}).strict();
export const StartDeadlineReminderLogArgsObjectSchema = makeSchema();
export const StartDeadlineReminderLogArgsObjectZodSchema = makeSchema();
