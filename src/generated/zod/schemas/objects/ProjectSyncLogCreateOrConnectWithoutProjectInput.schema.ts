import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogWhereUniqueInputObjectSchema as ProjectSyncLogWhereUniqueInputObjectSchema } from './ProjectSyncLogWhereUniqueInput.schema';
import { ProjectSyncLogCreateWithoutProjectInputObjectSchema as ProjectSyncLogCreateWithoutProjectInputObjectSchema } from './ProjectSyncLogCreateWithoutProjectInput.schema';
import { ProjectSyncLogUncheckedCreateWithoutProjectInputObjectSchema as ProjectSyncLogUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectSyncLogUncheckedCreateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectSyncLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectSyncLogCreateWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const ProjectSyncLogCreateOrConnectWithoutProjectInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogCreateOrConnectWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogCreateOrConnectWithoutProjectInput>;
export const ProjectSyncLogCreateOrConnectWithoutProjectInputObjectZodSchema = makeSchema();
