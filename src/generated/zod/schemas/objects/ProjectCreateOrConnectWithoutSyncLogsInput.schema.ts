import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutSyncLogsInputObjectSchema as ProjectCreateWithoutSyncLogsInputObjectSchema } from './ProjectCreateWithoutSyncLogsInput.schema';
import { ProjectUncheckedCreateWithoutSyncLogsInputObjectSchema as ProjectUncheckedCreateWithoutSyncLogsInputObjectSchema } from './ProjectUncheckedCreateWithoutSyncLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectCreateWithoutSyncLogsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutSyncLogsInputObjectSchema)])
}).strict();
export const ProjectCreateOrConnectWithoutSyncLogsInputObjectSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutSyncLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateOrConnectWithoutSyncLogsInput>;
export const ProjectCreateOrConnectWithoutSyncLogsInputObjectZodSchema = makeSchema();
