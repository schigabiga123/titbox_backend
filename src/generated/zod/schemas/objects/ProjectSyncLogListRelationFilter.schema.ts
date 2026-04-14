import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogWhereInputObjectSchema as ProjectSyncLogWhereInputObjectSchema } from './ProjectSyncLogWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ProjectSyncLogWhereInputObjectSchema).optional(),
  some: z.lazy(() => ProjectSyncLogWhereInputObjectSchema).optional(),
  none: z.lazy(() => ProjectSyncLogWhereInputObjectSchema).optional()
}).strict();
export const ProjectSyncLogListRelationFilterObjectSchema: z.ZodType<Prisma.ProjectSyncLogListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogListRelationFilter>;
export const ProjectSyncLogListRelationFilterObjectZodSchema = makeSchema();
