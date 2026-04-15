import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogItemCreateWithoutSyncLogInputObjectSchema as ProjectSyncLogItemCreateWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemCreateWithoutSyncLogInput.schema';
import { ProjectSyncLogItemUncheckedCreateWithoutSyncLogInputObjectSchema as ProjectSyncLogItemUncheckedCreateWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemUncheckedCreateWithoutSyncLogInput.schema';
import { ProjectSyncLogItemCreateOrConnectWithoutSyncLogInputObjectSchema as ProjectSyncLogItemCreateOrConnectWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemCreateOrConnectWithoutSyncLogInput.schema';
import { ProjectSyncLogItemUpsertWithWhereUniqueWithoutSyncLogInputObjectSchema as ProjectSyncLogItemUpsertWithWhereUniqueWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemUpsertWithWhereUniqueWithoutSyncLogInput.schema';
import { ProjectSyncLogItemCreateManySyncLogInputEnvelopeObjectSchema as ProjectSyncLogItemCreateManySyncLogInputEnvelopeObjectSchema } from './ProjectSyncLogItemCreateManySyncLogInputEnvelope.schema';
import { ProjectSyncLogItemWhereUniqueInputObjectSchema as ProjectSyncLogItemWhereUniqueInputObjectSchema } from './ProjectSyncLogItemWhereUniqueInput.schema';
import { ProjectSyncLogItemUpdateWithWhereUniqueWithoutSyncLogInputObjectSchema as ProjectSyncLogItemUpdateWithWhereUniqueWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemUpdateWithWhereUniqueWithoutSyncLogInput.schema';
import { ProjectSyncLogItemUpdateManyWithWhereWithoutSyncLogInputObjectSchema as ProjectSyncLogItemUpdateManyWithWhereWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemUpdateManyWithWhereWithoutSyncLogInput.schema';
import { ProjectSyncLogItemScalarWhereInputObjectSchema as ProjectSyncLogItemScalarWhereInputObjectSchema } from './ProjectSyncLogItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectSyncLogItemCreateWithoutSyncLogInputObjectSchema), z.lazy(() => ProjectSyncLogItemCreateWithoutSyncLogInputObjectSchema).array(), z.lazy(() => ProjectSyncLogItemUncheckedCreateWithoutSyncLogInputObjectSchema), z.lazy(() => ProjectSyncLogItemUncheckedCreateWithoutSyncLogInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectSyncLogItemCreateOrConnectWithoutSyncLogInputObjectSchema), z.lazy(() => ProjectSyncLogItemCreateOrConnectWithoutSyncLogInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProjectSyncLogItemUpsertWithWhereUniqueWithoutSyncLogInputObjectSchema), z.lazy(() => ProjectSyncLogItemUpsertWithWhereUniqueWithoutSyncLogInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProjectSyncLogItemCreateManySyncLogInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema), z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema), z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema), z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema), z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProjectSyncLogItemUpdateWithWhereUniqueWithoutSyncLogInputObjectSchema), z.lazy(() => ProjectSyncLogItemUpdateWithWhereUniqueWithoutSyncLogInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProjectSyncLogItemUpdateManyWithWhereWithoutSyncLogInputObjectSchema), z.lazy(() => ProjectSyncLogItemUpdateManyWithWhereWithoutSyncLogInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProjectSyncLogItemScalarWhereInputObjectSchema), z.lazy(() => ProjectSyncLogItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProjectSyncLogItemUncheckedUpdateManyWithoutSyncLogNestedInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemUncheckedUpdateManyWithoutSyncLogNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemUncheckedUpdateManyWithoutSyncLogNestedInput>;
export const ProjectSyncLogItemUncheckedUpdateManyWithoutSyncLogNestedInputObjectZodSchema = makeSchema();
