import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogItemCreateWithoutSyncLogInputObjectSchema as ProjectSyncLogItemCreateWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemCreateWithoutSyncLogInput.schema';
import { ProjectSyncLogItemUncheckedCreateWithoutSyncLogInputObjectSchema as ProjectSyncLogItemUncheckedCreateWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemUncheckedCreateWithoutSyncLogInput.schema';
import { ProjectSyncLogItemCreateOrConnectWithoutSyncLogInputObjectSchema as ProjectSyncLogItemCreateOrConnectWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemCreateOrConnectWithoutSyncLogInput.schema';
import { ProjectSyncLogItemCreateManySyncLogInputEnvelopeObjectSchema as ProjectSyncLogItemCreateManySyncLogInputEnvelopeObjectSchema } from './ProjectSyncLogItemCreateManySyncLogInputEnvelope.schema';
import { ProjectSyncLogItemWhereUniqueInputObjectSchema as ProjectSyncLogItemWhereUniqueInputObjectSchema } from './ProjectSyncLogItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectSyncLogItemCreateWithoutSyncLogInputObjectSchema), z.lazy(() => ProjectSyncLogItemCreateWithoutSyncLogInputObjectSchema).array(), z.lazy(() => ProjectSyncLogItemUncheckedCreateWithoutSyncLogInputObjectSchema), z.lazy(() => ProjectSyncLogItemUncheckedCreateWithoutSyncLogInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectSyncLogItemCreateOrConnectWithoutSyncLogInputObjectSchema), z.lazy(() => ProjectSyncLogItemCreateOrConnectWithoutSyncLogInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProjectSyncLogItemCreateManySyncLogInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema), z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProjectSyncLogItemCreateNestedManyWithoutSyncLogInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemCreateNestedManyWithoutSyncLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemCreateNestedManyWithoutSyncLogInput>;
export const ProjectSyncLogItemCreateNestedManyWithoutSyncLogInputObjectZodSchema = makeSchema();
