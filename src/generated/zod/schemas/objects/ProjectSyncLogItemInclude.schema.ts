import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogArgsObjectSchema as ProjectSyncLogArgsObjectSchema } from './ProjectSyncLogArgs.schema';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema'

const makeSchema = () => z.object({
  syncLog: z.union([z.boolean(), z.lazy(() => ProjectSyncLogArgsObjectSchema)]).optional(),
  project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional()
}).strict();
export const ProjectSyncLogItemIncludeObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemInclude>;
export const ProjectSyncLogItemIncludeObjectZodSchema = makeSchema();
