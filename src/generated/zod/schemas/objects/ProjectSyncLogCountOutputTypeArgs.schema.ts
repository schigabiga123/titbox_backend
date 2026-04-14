import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogCountOutputTypeSelectObjectSchema as ProjectSyncLogCountOutputTypeSelectObjectSchema } from './ProjectSyncLogCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProjectSyncLogCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ProjectSyncLogCountOutputTypeArgsObjectSchema = makeSchema();
export const ProjectSyncLogCountOutputTypeArgsObjectZodSchema = makeSchema();
