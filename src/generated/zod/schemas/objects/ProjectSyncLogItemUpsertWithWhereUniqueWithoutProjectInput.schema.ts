import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogItemWhereUniqueInputObjectSchema as ProjectSyncLogItemWhereUniqueInputObjectSchema } from './ProjectSyncLogItemWhereUniqueInput.schema';
import { ProjectSyncLogItemUpdateWithoutProjectInputObjectSchema as ProjectSyncLogItemUpdateWithoutProjectInputObjectSchema } from './ProjectSyncLogItemUpdateWithoutProjectInput.schema';
import { ProjectSyncLogItemUncheckedUpdateWithoutProjectInputObjectSchema as ProjectSyncLogItemUncheckedUpdateWithoutProjectInputObjectSchema } from './ProjectSyncLogItemUncheckedUpdateWithoutProjectInput.schema';
import { ProjectSyncLogItemCreateWithoutProjectInputObjectSchema as ProjectSyncLogItemCreateWithoutProjectInputObjectSchema } from './ProjectSyncLogItemCreateWithoutProjectInput.schema';
import { ProjectSyncLogItemUncheckedCreateWithoutProjectInputObjectSchema as ProjectSyncLogItemUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectSyncLogItemUncheckedCreateWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProjectSyncLogItemUpdateWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogItemUncheckedUpdateWithoutProjectInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectSyncLogItemCreateWithoutProjectInputObjectSchema), z.lazy(() => ProjectSyncLogItemUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const ProjectSyncLogItemUpsertWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemUpsertWithWhereUniqueWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemUpsertWithWhereUniqueWithoutProjectInput>;
export const ProjectSyncLogItemUpsertWithWhereUniqueWithoutProjectInputObjectZodSchema = makeSchema();
