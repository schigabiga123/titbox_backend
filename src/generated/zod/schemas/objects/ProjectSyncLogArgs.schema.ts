import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogSelectObjectSchema as ProjectSyncLogSelectObjectSchema } from './ProjectSyncLogSelect.schema';
import { ProjectSyncLogIncludeObjectSchema as ProjectSyncLogIncludeObjectSchema } from './ProjectSyncLogInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProjectSyncLogSelectObjectSchema).optional(),
  include: z.lazy(() => ProjectSyncLogIncludeObjectSchema).optional()
}).strict();
export const ProjectSyncLogArgsObjectSchema = makeSchema();
export const ProjectSyncLogArgsObjectZodSchema = makeSchema();
