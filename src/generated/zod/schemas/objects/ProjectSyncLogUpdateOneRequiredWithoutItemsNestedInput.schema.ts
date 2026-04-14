import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogCreateWithoutItemsInputObjectSchema as ProjectSyncLogCreateWithoutItemsInputObjectSchema } from './ProjectSyncLogCreateWithoutItemsInput.schema';
import { ProjectSyncLogUncheckedCreateWithoutItemsInputObjectSchema as ProjectSyncLogUncheckedCreateWithoutItemsInputObjectSchema } from './ProjectSyncLogUncheckedCreateWithoutItemsInput.schema';
import { ProjectSyncLogCreateOrConnectWithoutItemsInputObjectSchema as ProjectSyncLogCreateOrConnectWithoutItemsInputObjectSchema } from './ProjectSyncLogCreateOrConnectWithoutItemsInput.schema';
import { ProjectSyncLogUpsertWithoutItemsInputObjectSchema as ProjectSyncLogUpsertWithoutItemsInputObjectSchema } from './ProjectSyncLogUpsertWithoutItemsInput.schema';
import { ProjectSyncLogWhereUniqueInputObjectSchema as ProjectSyncLogWhereUniqueInputObjectSchema } from './ProjectSyncLogWhereUniqueInput.schema';
import { ProjectSyncLogUpdateToOneWithWhereWithoutItemsInputObjectSchema as ProjectSyncLogUpdateToOneWithWhereWithoutItemsInputObjectSchema } from './ProjectSyncLogUpdateToOneWithWhereWithoutItemsInput.schema';
import { ProjectSyncLogUpdateWithoutItemsInputObjectSchema as ProjectSyncLogUpdateWithoutItemsInputObjectSchema } from './ProjectSyncLogUpdateWithoutItemsInput.schema';
import { ProjectSyncLogUncheckedUpdateWithoutItemsInputObjectSchema as ProjectSyncLogUncheckedUpdateWithoutItemsInputObjectSchema } from './ProjectSyncLogUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectSyncLogCreateWithoutItemsInputObjectSchema), z.lazy(() => ProjectSyncLogUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectSyncLogCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProjectSyncLogUpsertWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectSyncLogWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProjectSyncLogUpdateToOneWithWhereWithoutItemsInputObjectSchema), z.lazy(() => ProjectSyncLogUpdateWithoutItemsInputObjectSchema), z.lazy(() => ProjectSyncLogUncheckedUpdateWithoutItemsInputObjectSchema)]).optional()
}).strict();
export const ProjectSyncLogUpdateOneRequiredWithoutItemsNestedInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogUpdateOneRequiredWithoutItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogUpdateOneRequiredWithoutItemsNestedInput>;
export const ProjectSyncLogUpdateOneRequiredWithoutItemsNestedInputObjectZodSchema = makeSchema();
