import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogItemWhereInputObjectSchema as ProjectSyncLogItemWhereInputObjectSchema } from './ProjectSyncLogItemWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ProjectSyncLogItemWhereInputObjectSchema).optional(),
  some: z.lazy(() => ProjectSyncLogItemWhereInputObjectSchema).optional(),
  none: z.lazy(() => ProjectSyncLogItemWhereInputObjectSchema).optional()
}).strict();
export const ProjectSyncLogItemListRelationFilterObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemListRelationFilter>;
export const ProjectSyncLogItemListRelationFilterObjectZodSchema = makeSchema();
