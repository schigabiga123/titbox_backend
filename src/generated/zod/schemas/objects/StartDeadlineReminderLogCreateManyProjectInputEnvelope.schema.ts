import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StartDeadlineReminderLogCreateManyProjectInputObjectSchema as StartDeadlineReminderLogCreateManyProjectInputObjectSchema } from './StartDeadlineReminderLogCreateManyProjectInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => StartDeadlineReminderLogCreateManyProjectInputObjectSchema), z.lazy(() => StartDeadlineReminderLogCreateManyProjectInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StartDeadlineReminderLogCreateManyProjectInputEnvelopeObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogCreateManyProjectInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogCreateManyProjectInputEnvelope>;
export const StartDeadlineReminderLogCreateManyProjectInputEnvelopeObjectZodSchema = makeSchema();
