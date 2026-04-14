import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogWhereUniqueInputObjectSchema as ProjectSyncLogWhereUniqueInputObjectSchema } from './ProjectSyncLogWhereUniqueInput.schema';
import { ProjectSyncLogUpdateWithoutProjectInputObjectSchema as ProjectSyncLogUpdateWithoutProjectInputObjectSchema } from './ProjectSyncLogUpdateWithoutProjectInput.schema';
import { ProjectSyncLogUncheckedUpdateWithoutProjectInputObjectSchema as ProjectSyncLogUncheckedUpdateWithoutProjectInputObjectSchema } from './ProjectSyncLogUncheckedUpdateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectSyncLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProjectSyncLogUpdateWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogUncheckedUpdateWithoutProjectInputObjectSchema)])
}).strict();
export const ProjectSyncLogUpdateWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogUpdateWithWhereUniqueWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogUpdateWithWhereUniqueWithoutProjectInput>;
export const ProjectSyncLogUpdateWithWhereUniqueWithoutProjectInputObjectZodSchema = makeSchema();
