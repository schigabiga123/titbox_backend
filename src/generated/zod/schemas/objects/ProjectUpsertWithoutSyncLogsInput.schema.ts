import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectUpdateWithoutSyncLogsInputObjectSchema as ProjectUpdateWithoutSyncLogsInputObjectSchema } from './ProjectUpdateWithoutSyncLogsInput.schema';
import { ProjectUncheckedUpdateWithoutSyncLogsInputObjectSchema as ProjectUncheckedUpdateWithoutSyncLogsInputObjectSchema } from './ProjectUncheckedUpdateWithoutSyncLogsInput.schema';
import { ProjectCreateWithoutSyncLogsInputObjectSchema as ProjectCreateWithoutSyncLogsInputObjectSchema } from './ProjectCreateWithoutSyncLogsInput.schema';
import { ProjectUncheckedCreateWithoutSyncLogsInputObjectSchema as ProjectUncheckedCreateWithoutSyncLogsInputObjectSchema } from './ProjectUncheckedCreateWithoutSyncLogsInput.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProjectUpdateWithoutSyncLogsInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutSyncLogsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectCreateWithoutSyncLogsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutSyncLogsInputObjectSchema)]),
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional()
}).strict();
export const ProjectUpsertWithoutSyncLogsInputObjectSchema: z.ZodType<Prisma.ProjectUpsertWithoutSyncLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpsertWithoutSyncLogsInput>;
export const ProjectUpsertWithoutSyncLogsInputObjectZodSchema = makeSchema();
