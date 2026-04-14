import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogCreateWithoutProjectInputObjectSchema as ProjectSyncLogCreateWithoutProjectInputObjectSchema } from './ProjectSyncLogCreateWithoutProjectInput.schema';
import { ProjectSyncLogUncheckedCreateWithoutProjectInputObjectSchema as ProjectSyncLogUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectSyncLogUncheckedCreateWithoutProjectInput.schema';
import { ProjectSyncLogCreateOrConnectWithoutProjectInputObjectSchema as ProjectSyncLogCreateOrConnectWithoutProjectInputObjectSchema } from './ProjectSyncLogCreateOrConnectWithoutProjectInput.schema';
import { ProjectSyncLogUpsertWithWhereUniqueWithoutProjectInputObjectSchema as ProjectSyncLogUpsertWithWhereUniqueWithoutProjectInputObjectSchema } from './ProjectSyncLogUpsertWithWhereUniqueWithoutProjectInput.schema';
import { ProjectSyncLogCreateManyProjectInputEnvelopeObjectSchema as ProjectSyncLogCreateManyProjectInputEnvelopeObjectSchema } from './ProjectSyncLogCreateManyProjectInputEnvelope.schema';
import { ProjectSyncLogWhereUniqueInputObjectSchema as ProjectSyncLogWhereUniqueInputObjectSchema } from './ProjectSyncLogWhereUniqueInput.schema';
import { ProjectSyncLogUpdateWithWhereUniqueWithoutProjectInputObjectSchema as ProjectSyncLogUpdateWithWhereUniqueWithoutProjectInputObjectSchema } from './ProjectSyncLogUpdateWithWhereUniqueWithoutProjectInput.schema';
import { ProjectSyncLogUpdateManyWithWhereWithoutProjectInputObjectSchema as ProjectSyncLogUpdateManyWithWhereWithoutProjectInputObjectSchema } from './ProjectSyncLogUpdateManyWithWhereWithoutProjectInput.schema';
import { ProjectSyncLogScalarWhereInputObjectSchema as ProjectSyncLogScalarWhereInputObjectSchema } from './ProjectSyncLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectSyncLogCreateWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => ProjectSyncLogUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectSyncLogCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProjectSyncLogUpsertWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogUpsertWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProjectSyncLogCreateManyProjectInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProjectSyncLogWhereUniqueInputObjectSchema), z.lazy(() => ProjectSyncLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProjectSyncLogWhereUniqueInputObjectSchema), z.lazy(() => ProjectSyncLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProjectSyncLogWhereUniqueInputObjectSchema), z.lazy(() => ProjectSyncLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProjectSyncLogWhereUniqueInputObjectSchema), z.lazy(() => ProjectSyncLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProjectSyncLogUpdateWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogUpdateWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProjectSyncLogUpdateManyWithWhereWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogUpdateManyWithWhereWithoutProjectInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProjectSyncLogScalarWhereInputObjectSchema), z.lazy(() => ProjectSyncLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProjectSyncLogUncheckedUpdateManyWithoutProjectNestedInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogUncheckedUpdateManyWithoutProjectNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogUncheckedUpdateManyWithoutProjectNestedInput>;
export const ProjectSyncLogUncheckedUpdateManyWithoutProjectNestedInputObjectZodSchema = makeSchema();
