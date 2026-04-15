import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StartDeadlineReminderLogCreateWithoutTaskInputObjectSchema as StartDeadlineReminderLogCreateWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogCreateWithoutTaskInput.schema';
import { StartDeadlineReminderLogUncheckedCreateWithoutTaskInputObjectSchema as StartDeadlineReminderLogUncheckedCreateWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogUncheckedCreateWithoutTaskInput.schema';
import { StartDeadlineReminderLogCreateOrConnectWithoutTaskInputObjectSchema as StartDeadlineReminderLogCreateOrConnectWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogCreateOrConnectWithoutTaskInput.schema';
import { StartDeadlineReminderLogUpsertWithWhereUniqueWithoutTaskInputObjectSchema as StartDeadlineReminderLogUpsertWithWhereUniqueWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogUpsertWithWhereUniqueWithoutTaskInput.schema';
import { StartDeadlineReminderLogCreateManyTaskInputEnvelopeObjectSchema as StartDeadlineReminderLogCreateManyTaskInputEnvelopeObjectSchema } from './StartDeadlineReminderLogCreateManyTaskInputEnvelope.schema';
import { StartDeadlineReminderLogWhereUniqueInputObjectSchema as StartDeadlineReminderLogWhereUniqueInputObjectSchema } from './StartDeadlineReminderLogWhereUniqueInput.schema';
import { StartDeadlineReminderLogUpdateWithWhereUniqueWithoutTaskInputObjectSchema as StartDeadlineReminderLogUpdateWithWhereUniqueWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogUpdateWithWhereUniqueWithoutTaskInput.schema';
import { StartDeadlineReminderLogUpdateManyWithWhereWithoutTaskInputObjectSchema as StartDeadlineReminderLogUpdateManyWithWhereWithoutTaskInputObjectSchema } from './StartDeadlineReminderLogUpdateManyWithWhereWithoutTaskInput.schema';
import { StartDeadlineReminderLogScalarWhereInputObjectSchema as StartDeadlineReminderLogScalarWhereInputObjectSchema } from './StartDeadlineReminderLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StartDeadlineReminderLogCreateWithoutTaskInputObjectSchema), z.lazy(() => StartDeadlineReminderLogCreateWithoutTaskInputObjectSchema).array(), z.lazy(() => StartDeadlineReminderLogUncheckedCreateWithoutTaskInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUncheckedCreateWithoutTaskInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StartDeadlineReminderLogCreateOrConnectWithoutTaskInputObjectSchema), z.lazy(() => StartDeadlineReminderLogCreateOrConnectWithoutTaskInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StartDeadlineReminderLogUpsertWithWhereUniqueWithoutTaskInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUpsertWithWhereUniqueWithoutTaskInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StartDeadlineReminderLogCreateManyTaskInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema), z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema), z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema), z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema), z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StartDeadlineReminderLogUpdateWithWhereUniqueWithoutTaskInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUpdateWithWhereUniqueWithoutTaskInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StartDeadlineReminderLogUpdateManyWithWhereWithoutTaskInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUpdateManyWithWhereWithoutTaskInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StartDeadlineReminderLogScalarWhereInputObjectSchema), z.lazy(() => StartDeadlineReminderLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StartDeadlineReminderLogUpdateManyWithoutTaskNestedInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogUpdateManyWithoutTaskNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogUpdateManyWithoutTaskNestedInput>;
export const StartDeadlineReminderLogUpdateManyWithoutTaskNestedInputObjectZodSchema = makeSchema();
