import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogItemSelectObjectSchema as ProjectSyncLogItemSelectObjectSchema } from './ProjectSyncLogItemSelect.schema';
import { ProjectSyncLogItemIncludeObjectSchema as ProjectSyncLogItemIncludeObjectSchema } from './ProjectSyncLogItemInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProjectSyncLogItemSelectObjectSchema).optional(),
  include: z.lazy(() => ProjectSyncLogItemIncludeObjectSchema).optional()
}).strict();
export const ProjectSyncLogItemArgsObjectSchema = makeSchema();
export const ProjectSyncLogItemArgsObjectZodSchema = makeSchema();
