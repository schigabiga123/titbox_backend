import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { TaskUpdateManyWithoutProjectNestedInputObjectSchema as TaskUpdateManyWithoutProjectNestedInputObjectSchema } from './TaskUpdateManyWithoutProjectNestedInput.schema';
import { ProjectSyncLogUpdateManyWithoutProjectNestedInputObjectSchema as ProjectSyncLogUpdateManyWithoutProjectNestedInputObjectSchema } from './ProjectSyncLogUpdateManyWithoutProjectNestedInput.schema';
import { StartDeadlineReminderLogUpdateManyWithoutProjectNestedInputObjectSchema as StartDeadlineReminderLogUpdateManyWithoutProjectNestedInputObjectSchema } from './StartDeadlineReminderLogUpdateManyWithoutProjectNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  partnerName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  pocketId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tasks: z.lazy(() => TaskUpdateManyWithoutProjectNestedInputObjectSchema).optional(),
  syncLogs: z.lazy(() => ProjectSyncLogUpdateManyWithoutProjectNestedInputObjectSchema).optional(),
  startDeadlineReminderLogs: z.lazy(() => StartDeadlineReminderLogUpdateManyWithoutProjectNestedInputObjectSchema).optional()
}).strict();
export const ProjectUpdateWithoutSyncLogItemsInputObjectSchema: z.ZodType<Prisma.ProjectUpdateWithoutSyncLogItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateWithoutSyncLogItemsInput>;
export const ProjectUpdateWithoutSyncLogItemsInputObjectZodSchema = makeSchema();
