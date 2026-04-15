import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StartDeadlineReminderLogCreateWithoutTaskInputObjectSchema as StartDeadlineReminderLogCreateWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogCreateWithoutTaskInput.schema';
import { StartDeadlineReminderLogUncheckedCreateWithoutTaskInputObjectSchema as StartDeadlineReminderLogUncheckedCreateWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogUncheckedCreateWithoutTaskInput.schema';
import { StartDeadlineReminderLogCreateOrConnectWithoutTaskInputObjectSchema as StartDeadlineReminderLogCreateOrConnectWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogCreateOrConnectWithoutTaskInput.schema';
import { StartDeadlineReminderLogCreateManyTaskInputEnvelopeObjectSchema as StartDeadlineReminderLogCreateManyTaskInputEnvelopeObjectSchema } from './StartDeadlineReminderLogCreateManyTaskInputEnvelope.schema';
import { StartDeadlineReminderLogWhereUniqueInputObjectSchema as StartDeadlineReminderLogWhereUniqueInputObjectSchema } from './StartDeadlineReminderLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StartDeadlineReminderLogCreateWithoutTaskInputObjectSchema), z.lazy(() => StartDeadlineReminderLogCreateWithoutTaskInputObjectSchema).array(), z.lazy(() => StartDeadlineReminderLogUncheckedCreateWithoutTaskInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUncheckedCreateWithoutTaskInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StartDeadlineReminderLogCreateOrConnectWithoutTaskInputObjectSchema), z.lazy(() => StartDeadlineReminderLogCreateOrConnectWithoutTaskInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StartDeadlineReminderLogCreateManyTaskInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema), z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StartDeadlineReminderLogUncheckedCreateNestedManyWithoutTaskInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogUncheckedCreateNestedManyWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogUncheckedCreateNestedManyWithoutTaskInput>;
export const StartDeadlineReminderLogUncheckedCreateNestedManyWithoutTaskInputObjectZodSchema = makeSchema();
