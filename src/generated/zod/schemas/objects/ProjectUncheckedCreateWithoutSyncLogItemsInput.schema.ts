import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskUncheckedCreateNestedManyWithoutProjectInputObjectSchema as TaskUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './TaskUncheckedCreateNestedManyWithoutProjectInput.schema';
import { ProjectSyncLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema as ProjectSyncLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './ProjectSyncLogUncheckedCreateNestedManyWithoutProjectInput.schema';
import { StartDeadlineReminderLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema as StartDeadlineReminderLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './StartDeadlineReminderLogUncheckedCreateNestedManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  partnerName: z.string().optional().nullable(),
  pocketId: z.string().optional().nullable(),
  title: z.string(),
  updatedAt: z.coerce.date().optional().nullable(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutProjectInputObjectSchema).optional(),
  syncLogs: z.lazy(() => ProjectSyncLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema).optional(),
  startDeadlineReminderLogs: z.lazy(() => StartDeadlineReminderLogUncheckedCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectUncheckedCreateWithoutSyncLogItemsInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutSyncLogItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateWithoutSyncLogItemsInput>;
export const ProjectUncheckedCreateWithoutSyncLogItemsInputObjectZodSchema = makeSchema();
