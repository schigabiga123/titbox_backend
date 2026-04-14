import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFindManySchema as TaskFindManySchema } from '../findManyTask.schema';
import { ProjectSyncLogFindManySchema as ProjectSyncLogFindManySchema } from '../findManyProjectSyncLog.schema';
import { ProjectSyncLogItemFindManySchema as ProjectSyncLogItemFindManySchema } from '../findManyProjectSyncLogItem.schema';
import { ProjectCountOutputTypeArgsObjectSchema as ProjectCountOutputTypeArgsObjectSchema } from './ProjectCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
  syncLogs: z.union([z.boolean(), z.lazy(() => ProjectSyncLogFindManySchema)]).optional(),
  syncLogItems: z.union([z.boolean(), z.lazy(() => ProjectSyncLogItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProjectIncludeObjectSchema: z.ZodType<Prisma.ProjectInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProjectInclude>;
export const ProjectIncludeObjectZodSchema = makeSchema();
