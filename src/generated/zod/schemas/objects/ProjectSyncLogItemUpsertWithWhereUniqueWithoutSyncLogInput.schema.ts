import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogItemWhereUniqueInputObjectSchema as ProjectSyncLogItemWhereUniqueInputObjectSchema } from './ProjectSyncLogItemWhereUniqueInput.schema';
import { ProjectSyncLogItemUpdateWithoutSyncLogInputObjectSchema as ProjectSyncLogItemUpdateWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemUpdateWithoutSyncLogInput.schema';
import { ProjectSyncLogItemUncheckedUpdateWithoutSyncLogInputObjectSchema as ProjectSyncLogItemUncheckedUpdateWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemUncheckedUpdateWithoutSyncLogInput.schema';
import { ProjectSyncLogItemCreateWithoutSyncLogInputObjectSchema as ProjectSyncLogItemCreateWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemCreateWithoutSyncLogInput.schema';
import { ProjectSyncLogItemUncheckedCreateWithoutSyncLogInputObjectSchema as ProjectSyncLogItemUncheckedCreateWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemUncheckedCreateWithoutSyncLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProjectSyncLogItemUpdateWithoutSyncLogInputObjectSchema), z.lazy(() => ProjectSyncLogItemUncheckedUpdateWithoutSyncLogInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectSyncLogItemCreateWithoutSyncLogInputObjectSchema), z.lazy(() => ProjectSyncLogItemUncheckedCreateWithoutSyncLogInputObjectSchema)])
}).strict();
export const ProjectSyncLogItemUpsertWithWhereUniqueWithoutSyncLogInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemUpsertWithWhereUniqueWithoutSyncLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemUpsertWithWhereUniqueWithoutSyncLogInput>;
export const ProjectSyncLogItemUpsertWithWhereUniqueWithoutSyncLogInputObjectZodSchema = makeSchema();
