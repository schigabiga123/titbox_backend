import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogItemWhereUniqueInputObjectSchema as ProjectSyncLogItemWhereUniqueInputObjectSchema } from './ProjectSyncLogItemWhereUniqueInput.schema';
import { ProjectSyncLogItemCreateWithoutSyncLogInputObjectSchema as ProjectSyncLogItemCreateWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemCreateWithoutSyncLogInput.schema';
import { ProjectSyncLogItemUncheckedCreateWithoutSyncLogInputObjectSchema as ProjectSyncLogItemUncheckedCreateWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemUncheckedCreateWithoutSyncLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectSyncLogItemCreateWithoutSyncLogInputObjectSchema), z.lazy(() => ProjectSyncLogItemUncheckedCreateWithoutSyncLogInputObjectSchema)])
}).strict();
export const ProjectSyncLogItemCreateOrConnectWithoutSyncLogInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemCreateOrConnectWithoutSyncLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemCreateOrConnectWithoutSyncLogInput>;
export const ProjectSyncLogItemCreateOrConnectWithoutSyncLogInputObjectZodSchema = makeSchema();
