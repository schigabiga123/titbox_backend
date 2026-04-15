import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskUncheckedCreateNestedManyWithoutProjectInputObjectSchema as TaskUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './TaskUncheckedCreateNestedManyWithoutProjectInput.schema';
import { ProjectSyncLogItemUncheckedCreateNestedManyWithoutProjectInputObjectSchema as ProjectSyncLogItemUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './ProjectSyncLogItemUncheckedCreateNestedManyWithoutProjectInput.schema';
import { StartDeadlineReminderLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema as StartDeadlineReminderLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogUncheckedCreateNestedManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  partnerName: z.string().optional().nullable(),
  pocketId: z.string().optional().nullable(),
  title: z.string(),
  updatedAt: z.coerce.date().optional().nullable(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutProjectInputObjectSchema).optional(),
  syncLogItems: z.lazy(() => ProjectSyncLogItemUncheckedCreateNestedManyWithoutProjectInputObjectSchema).optional(),
  startDeadlineReminderLogs: z.lazy(() => StartDeadlineReminderLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectUncheckedCreateWithoutSyncLogsInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutSyncLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateWithoutSyncLogsInput>;
export const ProjectUncheckedCreateWithoutSyncLogsInputObjectZodSchema = makeSchema();
