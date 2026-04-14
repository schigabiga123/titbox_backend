import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { ProjectUpdateWithoutSyncLogsInputObjectSchema as ProjectUpdateWithoutSyncLogsInputObjectSchema } from './ProjectUpdateWithoutSyncLogsInput.schema';
import { ProjectUncheckedUpdateWithoutSyncLogsInputObjectSchema as ProjectUncheckedUpdateWithoutSyncLogsInputObjectSchema } from './ProjectUncheckedUpdateWithoutSyncLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProjectUpdateWithoutSyncLogsInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutSyncLogsInputObjectSchema)])
}).strict();
export const ProjectUpdateToOneWithWhereWithoutSyncLogsInputObjectSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutSyncLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutSyncLogsInput>;
export const ProjectUpdateToOneWithWhereWithoutSyncLogsInputObjectZodSchema = makeSchema();
