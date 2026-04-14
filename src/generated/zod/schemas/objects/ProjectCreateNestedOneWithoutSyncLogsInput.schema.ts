import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutSyncLogsInputObjectSchema as ProjectCreateWithoutSyncLogsInputObjectSchema } from './ProjectCreateWithoutSyncLogsInput.schema';
import { ProjectUncheckedCreateWithoutSyncLogsInputObjectSchema as ProjectUncheckedCreateWithoutSyncLogsInputObjectSchema } from './ProjectUncheckedCreateWithoutSyncLogsInput.schema';
import { ProjectCreateOrConnectWithoutSyncLogsInputObjectSchema as ProjectCreateOrConnectWithoutSyncLogsInputObjectSchema } from './ProjectCreateOrConnectWithoutSyncLogsInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutSyncLogsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutSyncLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutSyncLogsInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProjectCreateNestedOneWithoutSyncLogsInputObjectSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutSyncLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateNestedOneWithoutSyncLogsInput>;
export const ProjectCreateNestedOneWithoutSyncLogsInputObjectZodSchema = makeSchema();
