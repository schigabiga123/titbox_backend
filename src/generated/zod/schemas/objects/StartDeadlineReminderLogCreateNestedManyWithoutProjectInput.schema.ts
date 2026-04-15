import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StartDeadlineReminderLogCreateWithoutProjectInputObjectSchema as StartDeadlineReminderLogCreateWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogCreateWithoutProjectInput.schema';
import { StartDeadlineReminderLogUncheckedCreateWithoutProjectInputObjectSchema as StartDeadlineReminderLogUncheckedCreateWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogUncheckedCreateWithoutProjectInput.schema';
import { StartDeadlineReminderLogCreateOrConnectWithoutProjectInputObjectSchema as StartDeadlineReminderLogCreateOrConnectWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogCreateOrConnectWithoutProjectInput.schema';
import { StartDeadlineReminderLogCreateManyProjectInputEnvelopeObjectSchema as StartDeadlineReminderLogCreateManyProjectInputEnvelopeObjectSchema } from './StartDeadlineReminderLogCreateManyProjectInputEnvelope.schema';
import { StartDeadlineReminderLogWhereUniqueInputObjectSchema as StartDeadlineReminderLogWhereUniqueInputObjectSchema } from './StartDeadlineReminderLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StartDeadlineReminderLogCreateWithoutProjectInputObjectSchema), z.lazy(() => StartDeadlineReminderLogCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => StartDeadlineReminderLogUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StartDeadlineReminderLogCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => StartDeadlineReminderLogCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StartDeadlineReminderLogCreateManyProjectInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema), z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StartDeadlineReminderLogCreateNestedManyWithoutProjectInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogCreateNestedManyWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogCreateNestedManyWithoutProjectInput>;
export const StartDeadlineReminderLogCreateNestedManyWithoutProjectInputObjectZodSchema = makeSchema();
