import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StartDeadlineReminderLogScalarWhereInputObjectSchema as StartDeadlineReminderLogScalarWhereInputObjectSchema } from './StartDeadlineReminderLogScalarWhereInput.schema';
import { StartDeadlineReminderLogUpdateManyMutationInputObjectSchema as StartDeadlineReminderLogUpdateManyMutationInputObjectSchema } from './StartDeadlineReminderLogUpdateManyMutationInput.schema';
import { StartDeadlineReminderLogUncheckedUpdateManyWithoutTaskInputObjectSchema as StartDeadlineReminderLogUncheckedUpdateManyWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogUncheckedUpdateManyWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StartDeadlineReminderLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StartDeadlineReminderLogUpdateManyMutationInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUncheckedUpdateManyWithoutTaskInputObjectSchema)])
}).strict();
export const StartDeadlineReminderLogUpdateManyWithWhereWithoutTaskInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogUpdateManyWithWhereWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogUpdateManyWithWhereWithoutTaskInput>;
export const StartDeadlineReminderLogUpdateManyWithWhereWithoutTaskInputObjectZodSchema = makeSchema();
