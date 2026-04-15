import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StartDeadlineReminderLogCreateManyTaskInputObjectSchema as StartDeadlineReminderLogCreateManyTaskInputObjectSchema } from './StartDeadlineReminderLogCreateManyTaskInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => StartDeadlineReminderLogCreateManyTaskInputObjectSchema), z.lazy(() => StartDeadlineReminderLogCreateManyTaskInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StartDeadlineReminderLogCreateManyTaskInputEnvelopeObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogCreateManyTaskInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogCreateManyTaskInputEnvelope>;
export const StartDeadlineReminderLogCreateManyTaskInputEnvelopeObjectZodSchema = makeSchema();
