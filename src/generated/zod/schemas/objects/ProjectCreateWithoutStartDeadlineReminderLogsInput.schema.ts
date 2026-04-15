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
  tasks: z.lazy(() => TaskCreateNestedManyWithoutProjectInputObjectSchema).optional(),
  syncLogs: z.lazy(() => ProjectSyncLogCreateNestedManyWithoutProjectInputObjectSchema).optional(),
  syncLogItems: z.lazy(() => ProjectSyncLogItemCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectCreateWithoutStartDeadlineReminderLogsInputObjectSchema: z.ZodType<Prisma.ProjectCreateWithoutStartDeadlineReminderLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateWithoutStartDeadlineReminderLogsInput>;
export const ProjectCreateWithoutStartDeadlineReminderLogsInputObjectZodSchema = makeSchema();
