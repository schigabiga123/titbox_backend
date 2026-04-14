import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFindManySchema as TaskFindManySchema } from '../findManyTask.schema';
import { ProjectSyncLogFindManySchema as ProjectSyncLogFindManySchema } from '../findManyProjectSyncLog.schema';
import { ProjectSyncLogItemFindManySchema as ProjectSyncLogItemFindManySchema } from '../findManyProjectSyncLogItem.schema';
import { ProjectCountOutputTypeArgsObjectSchema as ProjectCountOutputTypeArgsObjectSchema } from './ProjectCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  partnerName: z.boolean().optional(),
  pocketId: z.boolean().optional(),
  title: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  tasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
  syncLogs: z.union([z.boolean(), z.lazy(() => ProjectSyncLogFindManySchema)]).optional(),
  syncLogItems: z.union([z.boolean(), z.lazy(() => ProjectSyncLogItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProjectSelectObjectSchema: z.ZodType<Prisma.ProjectSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSelect>;
export const ProjectSelectObjectZodSchema = makeSchema();
