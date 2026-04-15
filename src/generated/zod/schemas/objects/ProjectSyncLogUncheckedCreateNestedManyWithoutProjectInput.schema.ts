import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogCreateWithoutProjectInputObjectSchema as ProjectSyncLogCreateWithoutProjectInputObjectSchema } from './ProjectSyncLogCreateWithoutProjectInput.schema';
import { ProjectSyncLogUncheckedCreateWithoutProjectInputObjectSchema as ProjectSyncLogUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectSyncLogUncheckedCreateWithoutProjectInput.schema';
import { ProjectSyncLogCreateOrConnectWithoutProjectInputObjectSchema as ProjectSyncLogCreateOrConnectWithoutProjectInputObjectSchema } from './ProjectSyncLogCreateOrConnectWithoutProjectInput.schema';
import { ProjectSyncLogCreateManyProjectInputEnvelopeObjectSchema as ProjectSyncLogCreateManyProjectInputEnvelopeObjectSchema } from './ProjectSyncLogCreateManyProjectInputEnvelope.schema';
import { ProjectSyncLogWhereUniqueInputObjectSchema as ProjectSyncLogWhereUniqueInputObjectSchema } from './ProjectSyncLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectSyncLogCreateWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => ProjectSyncLogUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectSyncLogCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProjectSyncLogCreateManyProjectInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProjectSyncLogWhereUniqueInputObjectSchema), z.lazy(() => ProjectSyncLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProjectSyncLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogUncheckedCreateNestedManyWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogUncheckedCreateNestedManyWithoutProjectInput>;
export const ProjectSyncLogUncheckedCreateNestedManyWithoutProjectInputObjectZodSchema = makeSchema();
