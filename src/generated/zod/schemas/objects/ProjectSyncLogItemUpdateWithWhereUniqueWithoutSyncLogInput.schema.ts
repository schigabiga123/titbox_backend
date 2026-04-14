import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogItemWhereUniqueInputObjectSchema as ProjectSyncLogItemWhereUniqueInputObjectSchema } from './ProjectSyncLogItemWhereUniqueInput.schema';
import { ProjectSyncLogItemUpdateWithoutSyncLogInputObjectSchema as ProjectSyncLogItemUpdateWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemUpdateWithoutSyncLogInput.schema';
import { ProjectSyncLogItemUncheckedUpdateWithoutSyncLogInputObjectSchema as ProjectSyncLogItemUncheckedUpdateWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemUncheckedUpdateWithoutSyncLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectSyncLogItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProjectSyncLogItemUpdateWithoutSyncLogInputObjectSchema), z.lazy(() => ProjectSyncLogItemUncheckedUpdateWithoutSyncLogInputObjectSchema)])
}).strict();
export const ProjectSyncLogItemUpdateWithWhereUniqueWithoutSyncLogInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemUpdateWithWhereUniqueWithoutSyncLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemUpdateWithWhereUniqueWithoutSyncLogInput>;
export const ProjectSyncLogItemUpdateWithWhereUniqueWithoutSyncLogInputObjectZodSchema = makeSchema();
