import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateNestedManyWithoutProjectInputObjectSchema as TaskCreateNestedManyWithoutProjectInputObjectSchema } from './TaskCreateNestedManyWithoutProjectInput.schema';
import { ProjectSyncLogCreateNestedManyWithoutProjectInputObjectSchema as ProjectSyncLogCreateNestedManyWithoutProjectInputObjectSchema } from './ProjectSyncLogCreateNestedManyWithoutProjectInput.schema';
import { ProjectSyncLogItemCreateNestedManyWithoutProjectInputObjectSchema as ProjectSyncLogItemCreateNestedManyWithoutProjectInputObjectSchema } from './ProjectSyncLogItemCreateNestedManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  partnerName: z.string().optional().nullable(),
  pocketId: z.string().optional().nullable(),
  title: z.string(),
  updatedAt: z.coerce.date().optional().nullable(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutProjectInputObjectSchema),
  syncLogs: z.lazy(() => ProjectSyncLogCreateNestedManyWithoutProjectInputObjectSchema),
  syncLogItems: z.lazy(() => ProjectSyncLogItemCreateNestedManyWithoutProjectInputObjectSchema)
}).strict();
export const ProjectCreateInputObjectSchema: z.ZodType<Prisma.ProjectCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateInput>;
export const ProjectCreateInputObjectZodSchema = makeSchema();
