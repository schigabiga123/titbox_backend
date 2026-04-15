import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogUpdateWithoutItemsInputObjectSchema as ProjectSyncLogUpdateWithoutItemsInputObjectSchema } from './ProjectSyncLogUpdateWithoutItemsInput.schema';
import { ProjectSyncLogUncheckedUpdateWithoutItemsInputObjectSchema as ProjectSyncLogUncheckedUpdateWithoutItemsInputObjectSchema } from './ProjectSyncLogUncheckedUpdateWithoutItemsInput.schema';
import { ProjectSyncLogCreateWithoutItemsInputObjectSchema as ProjectSyncLogCreateWithoutItemsInputObjectSchema } from './ProjectSyncLogCreateWithoutItemsInput.schema';
import { ProjectSyncLogUncheckedCreateWithoutItemsInputObjectSchema as ProjectSyncLogUncheckedCreateWithoutItemsInputObjectSchema } from './ProjectSyncLogUncheckedCreateWithoutItemsInput.schema';
import { ProjectSyncLogWhereInputObjectSchema as ProjectSyncLogWhereInputObjectSchema } from './ProjectSyncLogWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProjectSyncLogUpdateWithoutItemsInputObjectSchema), z.lazy(() => ProjectSyncLogUncheckedUpdateWithoutItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectSyncLogCreateWithoutItemsInputObjectSchema), z.lazy(() => ProjectSyncLogUncheckedCreateWithoutItemsInputObjectSchema)]),
  where: z.lazy(() => ProjectSyncLogWhereInputObjectSchema).optional()
}).strict();
export const ProjectSyncLogUpsertWithoutItemsInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogUpsertWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogUpsertWithoutItemsInput>;
export const ProjectSyncLogUpsertWithoutItemsInputObjectZodSchema = makeSchema();
