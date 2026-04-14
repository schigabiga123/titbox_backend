import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogWhereInputObjectSchema as ProjectSyncLogWhereInputObjectSchema } from './ProjectSyncLogWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ProjectSyncLogWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ProjectSyncLogWhereInputObjectSchema).optional()
}).strict();
export const ProjectSyncLogScalarRelationFilterObjectSchema: z.ZodType<Prisma.ProjectSyncLogScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogScalarRelationFilter>;
export const ProjectSyncLogScalarRelationFilterObjectZodSchema = makeSchema();
