import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogWhereInputObjectSchema as ProjectSyncLogWhereInputObjectSchema } from './ProjectSyncLogWhereInput.schema';
import { ProjectSyncLogUpdateWithoutItemsInputObjectSchema as ProjectSyncLogUpdateWithoutItemsInputObjectSchema } from './ProjectSyncLogUpdateWithoutItemsInput.schema';
import { ProjectSyncLogUncheckedUpdateWithoutItemsInputObjectSchema as ProjectSyncLogUncheckedUpdateWithoutItemsInputObjectSchema } from './ProjectSyncLogUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectSyncLogWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProjectSyncLogUpdateWithoutItemsInputObjectSchema), z.lazy(() => ProjectSyncLogUncheckedUpdateWithoutItemsInputObjectSchema)])
}).strict();
export const ProjectSyncLogUpdateToOneWithWhereWithoutItemsInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogUpdateToOneWithWhereWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogUpdateToOneWithWhereWithoutItemsInput>;
export const ProjectSyncLogUpdateToOneWithWhereWithoutItemsInputObjectZodSchema = makeSchema();
