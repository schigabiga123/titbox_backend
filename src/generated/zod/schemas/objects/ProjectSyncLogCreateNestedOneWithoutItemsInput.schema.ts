import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogCreateWithoutItemsInputObjectSchema as ProjectSyncLogCreateWithoutItemsInputObjectSchema } from './ProjectSyncLogCreateWithoutItemsInput.schema';
import { ProjectSyncLogUncheckedCreateWithoutItemsInputObjectSchema as ProjectSyncLogUncheckedCreateWithoutItemsInputObjectSchema } from './ProjectSyncLogUncheckedCreateWithoutItemsInput.schema';
import { ProjectSyncLogCreateOrConnectWithoutItemsInputObjectSchema as ProjectSyncLogCreateOrConnectWithoutItemsInputObjectSchema } from './ProjectSyncLogCreateOrConnectWithoutItemsInput.schema';
import { ProjectSyncLogWhereUniqueInputObjectSchema as ProjectSyncLogWhereUniqueInputObjectSchema } from './ProjectSyncLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectSyncLogCreateWithoutItemsInputObjectSchema), z.lazy(() => ProjectSyncLogUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectSyncLogCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectSyncLogWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProjectSyncLogCreateNestedOneWithoutItemsInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogCreateNestedOneWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogCreateNestedOneWithoutItemsInput>;
export const ProjectSyncLogCreateNestedOneWithoutItemsInputObjectZodSchema = makeSchema();
