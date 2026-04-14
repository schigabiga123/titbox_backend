import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { ProjectSyncLogUncheckedUpdateManyWithoutProjectNestedInputObjectSchema as ProjectSyncLogUncheckedUpdateManyWithoutProjectNestedInputObjectSchema } from './ProjectSyncLogUncheckedUpdateManyWithoutProjectNestedInput.schema';
import { ProjectSyncLogItemUncheckedUpdateManyWithoutProjectNestedInputObjectSchema as ProjectSyncLogItemUncheckedUpdateManyWithoutProjectNestedInputObjectSchema } from './ProjectSyncLogItemUncheckedUpdateManyWithoutProjectNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  partnerName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  pocketId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  syncLogs: z.lazy(() => ProjectSyncLogUncheckedUpdateManyWithoutProjectNestedInputObjectSchema).optional(),
  syncLogItems: z.lazy(() => ProjectSyncLogItemUncheckedUpdateManyWithoutProjectNestedInputObjectSchema).optional()
}).strict();
export const ProjectUncheckedUpdateWithoutTasksInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUncheckedUpdateWithoutTasksInput>;
export const ProjectUncheckedUpdateWithoutTasksInputObjectZodSchema = makeSchema();
