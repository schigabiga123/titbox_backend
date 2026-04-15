import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { TaskUpdateManyWithoutProjectNestedInputObjectSchema as TaskUpdateManyWithoutProjectNestedInputObjectSchema } from './TaskUpdateManyWithoutProjectNestedInput.schema';
import { ProjectSyncLogItemUpdateManyWithoutProjectNestedInputObjectSchema as ProjectSyncLogItemUpdateManyWithoutProjectNestedInputObjectSchema } from './ProjectSyncLogItemUpdateManyWithoutProjectNestedInput.schema';
import { StartDeadlineReminderLogUpdateManyWithoutProjectNestedInputObjectSchema as StartDeadlineReminderLogUpdateManyWithoutProjectNestedInputObjectSchema } from './StartDeadlineReminderLogUpdateManyWithoutProjectNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  partnerName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  pocketId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tasks: z.lazy(() => TaskUpdateManyWithoutProjectNestedInputObjectSchema).optional(),
  syncLogItems: z.lazy(() => ProjectSyncLogItemUpdateManyWithoutProjectNestedInputObjectSchema).optional(),
  startDeadlineReminderLogs: z.lazy(() => StartDeadlineReminderLogUpdateManyWithoutProjectNestedInputObjectSchema).optional()
}).strict();
export const ProjectUpdateWithoutSyncLogsInputObjectSchema: z.ZodType<Prisma.ProjectUpdateWithoutSyncLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateWithoutSyncLogsInput>;
export const ProjectUpdateWithoutSyncLogsInputObjectZodSchema = makeSchema();
