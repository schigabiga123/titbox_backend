import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StartDeadlineReminderLogScalarWhereInputObjectSchema as StartDeadlineReminderLogScalarWhereInputObjectSchema } from './StartDeadlineReminderLogScalarWhereInput.schema';
import { StartDeadlineReminderLogUpdateManyMutationInputObjectSchema as StartDeadlineReminderLogUpdateManyMutationInputObjectSchema } from './StartDeadlineReminderLogUpdateManyMutationInput.schema';
import { StartDeadlineReminderLogUncheckedUpdateManyWithoutProjectInputObjectSchema as StartDeadlineReminderLogUncheckedUpdateManyWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogUncheckedUpdateManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StartDeadlineReminderLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StartDeadlineReminderLogUpdateManyMutationInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUncheckedUpdateManyWithoutProjectInputObjectSchema)])
}).strict();
export const StartDeadlineReminderLogUpdateManyWithWhereWithoutProjectInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogUpdateManyWithWhereWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogUpdateManyWithWhereWithoutProjectInput>;
export const StartDeadlineReminderLogUpdateManyWithWhereWithoutProjectInputObjectZodSchema = makeSchema();
