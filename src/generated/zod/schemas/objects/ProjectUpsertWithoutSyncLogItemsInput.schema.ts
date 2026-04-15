import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectUpdateWithoutSyncLogItemsInputObjectSchema as ProjectUpdateWithoutSyncLogItemsInputObjectSchema } from './ProjectUpdateWithoutSyncLogItemsInput.schema';
import { ProjectUncheckedUpdateWithoutSyncLogItemsInputObjectSchema as ProjectUncheckedUpdateWithoutSyncLogItemsInputObjectSchema } from './ProjectUncheckedUpdateWithoutSyncLogItemsInput.schema';
import { ProjectCreateWithoutSyncLogItemsInputObjectSchema as ProjectCreateWithoutSyncLogItemsInputObjectSchema } from './ProjectCreateWithoutSyncLogItemsInput.schema';
import { ProjectUncheckedCreateWithoutSyncLogItemsInputObjectSchema as ProjectUncheckedCreateWithoutSyncLogItemsInputObjectSchema } from './ProjectUncheckedCreateWithoutSyncLogItemsInput.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProjectUpdateWithoutSyncLogItemsInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutSyncLogItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectCreateWithoutSyncLogItemsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutSyncLogItemsInputObjectSchema)]),
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional()
}).strict();
export const ProjectUpsertWithoutSyncLogItemsInputObjectSchema: z.ZodType<Prisma.ProjectUpsertWithoutSyncLogItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpsertWithoutSyncLogItemsInput>;
export const ProjectUpsertWithoutSyncLogItemsInputObjectZodSchema = makeSchema();
