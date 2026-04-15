import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogWhereUniqueInputObjectSchema as ProjectSyncLogWhereUniqueInputObjectSchema } from './ProjectSyncLogWhereUniqueInput.schema';
import { ProjectSyncLogCreateWithoutItemsInputObjectSchema as ProjectSyncLogCreateWithoutItemsInputObjectSchema } from './ProjectSyncLogCreateWithoutItemsInput.schema';
import { ProjectSyncLogUncheckedCreateWithoutItemsInputObjectSchema as ProjectSyncLogUncheckedCreateWithoutItemsInputObjectSchema } from './ProjectSyncLogUncheckedCreateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectSyncLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectSyncLogCreateWithoutItemsInputObjectSchema), z.lazy(() => ProjectSyncLogUncheckedCreateWithoutItemsInputObjectSchema)])
}).strict();
export const ProjectSyncLogCreateOrConnectWithoutItemsInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogCreateOrConnectWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogCreateOrConnectWithoutItemsInput>;
export const ProjectSyncLogCreateOrConnectWithoutItemsInputObjectZodSchema = makeSchema();
