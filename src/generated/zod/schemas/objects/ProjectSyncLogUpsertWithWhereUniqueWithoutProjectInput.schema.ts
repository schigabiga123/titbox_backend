import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogWhereUniqueInputObjectSchema as ProjectSyncLogWhereUniqueInputObjectSchema } from './ProjectSyncLogWhereUniqueInput.schema';
import { ProjectSyncLogUpdateWithoutProjectInputObjectSchema as ProjectSyncLogUpdateWithoutProjectInputObjectSchema } from './ProjectSyncLogUpdateWithoutProjectInput.schema';
import { ProjectSyncLogUncheckedUpdateWithoutProjectInputObjectSchema as ProjectSyncLogUncheckedUpdateWithoutProjectInputObjectSchema } from './ProjectSyncLogUncheckedUpdateWithoutProjectInput.schema';
import { ProjectSyncLogCreateWithoutProjectInputObjectSchema as ProjectSyncLogCreateWithoutProjectInputObjectSchema } from './ProjectSyncLogCreateWithoutProjectInput.schema';
import { ProjectSyncLogUncheckedCreateWithoutProjectInputObjectSchema as ProjectSyncLogUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectSyncLogUncheckedCreateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectSyncLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProjectSyncLogUpdateWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogUncheckedUpdateWithoutProjectInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectSyncLogCreateWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const ProjectSyncLogUpsertWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogUpsertWithWhereUniqueWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogUpsertWithWhereUniqueWithoutProjectInput>;
export const ProjectSyncLogUpsertWithWhereUniqueWithoutProjectInputObjectZodSchema = makeSchema();
