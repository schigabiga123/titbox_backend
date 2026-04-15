import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { TaskUncheckedUpdateManyWithoutProjectNestedInputObjectSchema as TaskUncheckedUpdateManyWithoutProjectNestedInputObjectSchema } from './TaskUncheckedUpdateManyWithoutProjectNestedInput.schema';
import { ProjectSyncLogUncheckedUpdateManyWithoutProjectNestedInputObjectSchema as ProjectSyncLogUncheckedUpdateManyWithoutProjectNestedInputObjectSchema } from './ProjectSyncLogUncheckedUpdateManyWithoutProjectNestedInput.schema';
import { StartDeadlineReminderLogUncheckedUpdateManyWithoutProjectNestedInputObjectSchema as StartDeadlineReminderLogUncheckedUpdateManyWithoutProjectNestedInputObjectSchema } from './StartDeadlineReminderLogUncheckedUpdateManyWithoutProjectNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  partnerName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  pocketId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutProjectNestedInputObjectSchema).optional(),
  syncLogs: z.lazy(() => ProjectSyncLogUncheckedUpdateManyWithoutProjectNestedInputObjectSchema).optional(),
  startDeadlineReminderLogs: z.lazy(() => StartDeadlineReminderLogUncheckedUpdateManyWithoutProjectNestedInputObjectSchema).optional()
}).strict();
export const ProjectUncheckedUpdateWithoutSyncLogItemsInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutSyncLogItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUncheckedUpdateWithoutSyncLogItemsInput>;
export const ProjectUncheckedUpdateWithoutSyncLogItemsInputObjectZodSchema = makeSchema();
