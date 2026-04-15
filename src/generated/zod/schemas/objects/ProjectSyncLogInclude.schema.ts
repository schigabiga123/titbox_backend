import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema';
import { ProjectSyncLogItemFindManySchema as ProjectSyncLogItemFindManySchema } from '../findManyProjectSyncLogItem.schema';
import { ProjectSyncLogCountOutputTypeArgsObjectSchema as ProjectSyncLogCountOutputTypeArgsObjectSchema } from './ProjectSyncLogCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
  items: z.union([z.boolean(), z.lazy(() => ProjectSyncLogItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProjectSyncLogCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProjectSyncLogIncludeObjectSchema: z.ZodType<Prisma.ProjectSyncLogInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogInclude>;
export const ProjectSyncLogIncludeObjectZodSchema = makeSchema();
