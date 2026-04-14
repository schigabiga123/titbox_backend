import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogItemCreateWithoutProjectInputObjectSchema as ProjectSyncLogItemCreateWithoutProjectInputObjectSchema } from './ProjectSyncLogItemCreateWithoutProjectInput.schema';
import { ProjectSyncLogItemUncheckedCreateWithoutProjectInputObjectSchema as ProjectSyncLogItemUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectSyncLogItemUncheckedCreateWithoutProjectInput.schema';
import { ProjectSyncLogItemCreateOrConnectWithoutProjectInputObjectSchema as ProjectSyncLogItemCreateOrConnectWithoutProjectInputObjectSchema } from './ProjectSyncLogItemCreateOrConnectWithoutProjectInput.schema';
import { ProjectSyncLogItemCreateManyProjectInputEnvelopeObjectSchema as ProjectSyncLogItemCreateManyProjectInputEnvelopeObjectSchema } from './ProjectSyncLogItemCreateManyProjectInputEnvelope.schema';
import { ProjectSyncLogItemWhereUniqueInputObjectSchema as ProjectSyncLogItemWhereUniqueInputObjectSchema } from './ProjectSyncLogItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectSyncLogItemCreateWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogItemCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => ProjectSyncLogItemUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogItemUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectSyncLogItemCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogItemCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProjectSyncLogItemCreateManyProjectInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema), z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProjectSyncLogItemUncheckedCreateNestedManyWithoutProjectInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemUncheckedCreateNestedManyWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemUncheckedCreateNestedManyWithoutProjectInput>;
export const ProjectSyncLogItemUncheckedCreateNestedManyWithoutProjectInputObjectZodSchema = makeSchema();
