import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutSyncLogsInputObjectSchema as ProjectCreateWithoutSyncLogsInputObjectSchema } from './ProjectCreateWithoutSyncLogsInput.schema';
import { ProjectUncheckedCreateWithoutSyncLogsInputObjectSchema as ProjectUncheckedCreateWithoutSyncLogsInputObjectSchema } from './ProjectUncheckedCreateWithoutSyncLogsInput.schema';
import { ProjectCreateOrConnectWithoutSyncLogsInputObjectSchema as ProjectCreateOrConnectWithoutSyncLogsInputObjectSchema } from './ProjectCreateOrConnectWithoutSyncLogsInput.schema';
import { ProjectUpsertWithoutSyncLogsInputObjectSchema as ProjectUpsertWithoutSyncLogsInputObjectSchema } from './ProjectUpsertWithoutSyncLogsInput.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateToOneWithWhereWithoutSyncLogsInputObjectSchema as ProjectUpdateToOneWithWhereWithoutSyncLogsInputObjectSchema } from './ProjectUpdateToOneWithWhereWithoutSyncLogsInput.schema';
import { ProjectUpdateWithoutSyncLogsInputObjectSchema as ProjectUpdateWithoutSyncLogsInputObjectSchema } from './ProjectUpdateWithoutSyncLogsInput.schema';
import { ProjectUncheckedUpdateWithoutSyncLogsInputObjectSchema as ProjectUncheckedUpdateWithoutSyncLogsInputObjectSchema } from './ProjectUncheckedUpdateWithoutSyncLogsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutSyncLogsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutSyncLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutSyncLogsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutSyncLogsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ProjectWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ProjectWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProjectUpdateToOneWithWhereWithoutSyncLogsInputObjectSchema), z.lazy(() => ProjectUpdateWithoutSyncLogsInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutSyncLogsInputObjectSchema)]).optional()
}).strict();
export const ProjectUpdateOneWithoutSyncLogsNestedInputObjectSchema: z.ZodType<Prisma.ProjectUpdateOneWithoutSyncLogsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateOneWithoutSyncLogsNestedInput>;
export const ProjectUpdateOneWithoutSyncLogsNestedInputObjectZodSchema = makeSchema();
