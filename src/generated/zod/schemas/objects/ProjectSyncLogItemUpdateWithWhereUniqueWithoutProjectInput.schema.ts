import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogItemWhereUniqueInputObjectSchema as ProjectSyncLogItemWhereUniqueInputObjectSchema } from './ProjectSyncLogItemWhereUniqueInput.schema';
import { ProjectSyncLogItemUpdateWithoutProjectInputObjectSchema as ProjectSyncLogItemUpdateWithoutProjectInputObjectSchema } from './ProjectSyncLogItemUpdateWithoutProjectInput.schema';
import { ProjectSyncLogItemUncheckedUpdateWithoutProjectInputObjectSchema as ProjectSyncLogItemUncheckedUpdateWithoutProjectInputObjectSchema } from './ProjectSyncLogItemUncheckedUpdateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProjectSyncLogItemUpdateWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogItemUncheckedUpdateWithoutProjectInputObjectSchema)])
}).strict();
export const ProjectSyncLogItemUpdateWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemUpdateWithWhereUniqueWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemUpdateWithWhereUniqueWithoutProjectInput>;
export const ProjectSyncLogItemUpdateWithWhereUniqueWithoutProjectInputObjectZodSchema = makeSchema();
