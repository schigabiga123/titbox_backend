import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogItemCreateWithoutProjectInputObjectSchema as ProjectSyncLogItemCreateWithoutProjectInputObjectSchema } from './ProjectSyncLogItemCreateWithoutProjectInput.schema';
import { ProjectSyncLogItemUncheckedCreateWithoutProjectInputObjectSchema as ProjectSyncLogItemUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectSyncLogItemUncheckedCreateWithoutProjectInput.schema';
import { ProjectSyncLogItemCreateOrConnectWithoutProjectInputObjectSchema as ProjectSyncLogItemCreateOrConnectWithoutProjectInputObjectSchema } from './ProjectSyncLogItemCreateOrConnectWithoutProjectInput.schema';
import { ProjectSyncLogItemUpsertWithWhereUniqueWithoutProjectInputObjectSchema as ProjectSyncLogItemUpsertWithWhereUniqueWithoutProjectInputObjectSchema } from './ProjectSyncLogItemUpsertWithWhereUniqueWithoutProjectInput.schema';
import { ProjectSyncLogItemCreateManyProjectInputEnvelopeObjectSchema as ProjectSyncLogItemCreateManyProjectInputEnvelopeObjectSchema } from './ProjectSyncLogItemCreateManyProjectInputEnvelope.schema';
import { ProjectSyncLogItemWhereUniqueInputObjectSchema as ProjectSyncLogItemWhereUniqueInputObjectSchema } from './ProjectSyncLogItemWhereUniqueInput.schema';
import { ProjectSyncLogItemUpdateWithWhereUniqueWithoutProjectInputObjectSchema as ProjectSyncLogItemUpdateWithWhereUniqueWithoutProjectInputObjectSchema } from './ProjectSyncLogItemUpdateWithWhereUniqueWithoutProjectInput.schema';
import { ProjectSyncLogItemUpdateManyWithWhereWithoutProjectInputObjectSchema as ProjectSyncLogItemUpdateManyWithWhereWithoutProjectInputObjectSchema } from './ProjectSyncLogItemUpdateManyWithWhereWithoutProjectInput.schema';
import { ProjectSyncLogItemScalarWhereInputObjectSchema as ProjectSyncLogItemScalarWhereInputObjectSchema } from './ProjectSyncLogItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectSyncLogItemCreateWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogItemCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => ProjectSyncLogItemUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogItemUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectSyncLogItemCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogItemCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProjectSyncLogItemUpsertWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogItemUpsertWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProjectSyncLogItemCreateManyProjectInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema), z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema), z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema), z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema), z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProjectSyncLogItemUpdateWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogItemUpdateWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProjectSyncLogItemUpdateManyWithWhereWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogItemUpdateManyWithWhereWithoutProjectInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProjectSyncLogItemScalarWhereInputObjectSchema), z.lazy(() => ProjectSyncLogItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProjectSyncLogItemUpdateManyWithoutProjectNestedInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemUpdateManyWithoutProjectNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemUpdateManyWithoutProjectNestedInput>;
export const ProjectSyncLogItemUpdateManyWithoutProjectNestedInputObjectZodSchema = makeSchema();
