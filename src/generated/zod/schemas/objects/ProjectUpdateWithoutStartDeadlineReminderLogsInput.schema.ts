import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { TaskUpdateManyWithoutProjectNestedInputObjectSchema as TaskUpdateManyWithoutProjectNestedInputObjectSchema } from './TaskUpdateManyWithoutProjectNestedInput.schema';
import { ProjectSyncLogUpdateManyWithoutProjectNestedInputObjectSchema as ProjectSyncLogUpdateManyWithoutProjectNestedInputObjectSchema } from './ProjectSyncLogUpdateManyWithoutProjectNestedInput.schema';
import { ProjectSyncLogItemUpdateManyWithoutProjectNestedInputObjectSchema as ProjectSyncLogItemUpdateManyWithoutProjectNestedInputObjectSchema } from './ProjectSyncLogItemUpdateManyWithoutProjectNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  partnerName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  pocketId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tasks: z.lazy(() => TaskUpdateManyWithoutProjectNestedInputObjectSchema).optional(),
  syncLogs: z.lazy(() => ProjectSyncLogUpdateManyWithoutProjectNestedInputObjectSchema).optional(),
  syncLogItems: z.lazy(() => ProjectSyncLogItemUpdateManyWithoutProjectNestedInputObjectSchema).optional()
}).strict();
export const ProjectUpdateWithoutStartDeadlineReminderLogsInputObjectSchema: z.ZodType<Prisma.ProjectUpdateWithoutStartDeadlineReminderLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateWithoutStartDeadlineReminderLogsInput>;
export const ProjectUpdateWithoutStartDeadlineReminderLogsInputObjectZodSchema = makeSchema();
