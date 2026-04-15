import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateNestedManyWithoutProjectInputObjectSchema as TaskCreateNestedManyWithoutProjectInputObjectSchema } from './TaskCreateNestedManyWithoutProjectInput.schema';
import { ProjectSyncLogItemCreateNestedManyWithoutProjectInputObjectSchema as ProjectSyncLogItemCreateNestedManyWithoutProjectInputObjectSchema } from './ProjectSyncLogItemCreateNestedManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  partnerName: z.string().optional().nullable(),
  pocketId: z.string().optional().nullable(),
  title: z.string(),
  updatedAt: z.coerce.date().optional().nullable(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutProjectInputObjectSchema).optional(),
  syncLogItems: z.lazy(() => ProjectSyncLogItemCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectCreateWithoutSyncLogsInputObjectSchema: z.ZodType<Prisma.ProjectCreateWithoutSyncLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateWithoutSyncLogsInput>;
export const ProjectCreateWithoutSyncLogsInputObjectZodSchema = makeSchema();
