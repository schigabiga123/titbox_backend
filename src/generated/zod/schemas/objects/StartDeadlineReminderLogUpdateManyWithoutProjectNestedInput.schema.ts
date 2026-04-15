import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StartDeadlineReminderLogCreateWithoutProjectInputObjectSchema as StartDeadlineReminderLogCreateWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogCreateWithoutProjectInput.schema';
import { StartDeadlineReminderLogUncheckedCreateWithoutProjectInputObjectSchema as StartDeadlineReminderLogUncheckedCreateWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogUncheckedCreateWithoutProjectInput.schema';
import { StartDeadlineReminderLogCreateOrConnectWithoutProjectInputObjectSchema as StartDeadlineReminderLogCreateOrConnectWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogCreateOrConnectWithoutProjectInput.schema';
import { StartDeadlineReminderLogUpsertWithWhereUniqueWithoutProjectInputObjectSchema as StartDeadlineReminderLogUpsertWithWhereUniqueWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogUpsertWithWhereUniqueWithoutProjectInput.schema';
import { StartDeadlineReminderLogCreateManyProjectInputEnvelopeObjectSchema as StartDeadlineReminderLogCreateManyProjectInputEnvelopeObjectSchema } from './StartDeadlineReminderLogCreateManyProjectInputEnvelope.schema';
import { StartDeadlineReminderLogWhereUniqueInputObjectSchema as StartDeadlineReminderLogWhereUniqueInputObjectSchema } from './StartDeadlineReminderLogWhereUniqueInput.schema';
import { StartDeadlineReminderLogUpdateWithWhereUniqueWithoutProjectInputObjectSchema as StartDeadlineReminderLogUpdateWithWhereUniqueWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogUpdateWithWhereUniqueWithoutProjectInput.schema';
import { StartDeadlineReminderLogUpdateManyWithWhereWithoutProjectInputObjectSchema as StartDeadlineReminderLogUpdateManyWithWhereWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogUpdateManyWithWhereWithoutProjectInput.schema';
import { StartDeadlineReminderLogScalarWhereInputObjectSchema as StartDeadlineReminderLogScalarWhereInputObjectSchema } from './StartDeadlineReminderLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StartDeadlineReminderLogCreateWithoutProjectInputObjectSchema), z.lazy(() => StartDeadlineReminderLogCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => StartDeadlineReminderLogUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StartDeadlineReminderLogCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => StartDeadlineReminderLogCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StartDeadlineReminderLogUpsertWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUpsertWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StartDeadlineReminderLogCreateManyProjectInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema), z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema), z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema), z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema), z.lazy(() => StartDeadlineReminderLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StartDeadlineReminderLogUpdateWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUpdateWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StartDeadlineReminderLogUpdateManyWithWhereWithoutProjectInputObjectSchema), z.lazy(() => StartDeadlineReminderLogUpdateManyWithWhereWithoutProjectInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StartDeadlineReminderLogScalarWhereInputObjectSchema), z.lazy(() => StartDeadlineReminderLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StartDeadlineReminderLogUpdateManyWithoutProjectNestedInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogUpdateManyWithoutProjectNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogUpdateManyWithoutProjectNestedInput>;
export const StartDeadlineReminderLogUpdateManyWithoutProjectNestedInputObjectZodSchema = makeSchema();
