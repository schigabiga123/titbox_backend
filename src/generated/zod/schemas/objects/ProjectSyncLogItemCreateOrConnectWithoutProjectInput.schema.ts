import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogItemWhereUniqueInputObjectSchema as ProjectSyncLogItemWhereUniqueInputObjectSchema } from './ProjectSyncLogItemWhereUniqueInput.schema';
import { ProjectSyncLogItemCreateWithoutProjectInputObjectSchema as ProjectSyncLogItemCreateWithoutProjectInputObjectSchema } from './ProjectSyncLogItemCreateWithoutProjectInput.schema';
import { ProjectSyncLogItemUncheckedCreateWithoutProjectInputObjectSchema as ProjectSyncLogItemUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectSyncLogItemUncheckedCreateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectSyncLogItemCreateWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogItemUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const ProjectSyncLogItemCreateOrConnectWithoutProjectInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemCreateOrConnectWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemCreateOrConnectWithoutProjectInput>;
export const ProjectSyncLogItemCreateOrConnectWithoutProjectInputObjectZodSchema = makeSchema();
