import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema as ProjectSyncLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './ProjectSyncLogUncheckedCreateNestedManyWithoutProjectInput.schema';
import { ProjectSyncLogItemUncheckedCreateNestedManyWithoutProjectInputObjectSchema as ProjectSyncLogItemUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './ProjectSyncLogItemUncheckedCreateNestedManyWithoutProjectInput.schema';
import { StartDeadlineReminderLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema as StartDeadlineReminderLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogUncheckedCreateNestedManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  partnerName: z.string().optional().nullable(),
  pocketId: z.string().optional().nullable(),
  title: z.string(),
  updatedAt: z.coerce.date().optional().nullable(),
  syncLogs: z.lazy(() => ProjectSyncLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema).optional(),
  syncLogItems: z.lazy(() => ProjectSyncLogItemUncheckedCreateNestedManyWithoutProjectInputObjectSchema).optional(),
  startDeadlineReminderLogs: z.lazy(() => StartDeadlineReminderLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectUncheckedCreateWithoutTasksInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateWithoutTasksInput>;
export const ProjectUncheckedCreateWithoutTasksInputObjectZodSchema = makeSchema();
