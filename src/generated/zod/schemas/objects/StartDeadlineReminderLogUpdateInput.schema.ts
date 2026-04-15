import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { TaskUpdateOneRequiredWithoutStartDeadlineReminderLogsNestedInputObjectSchema as TaskUpdateOneRequiredWithoutStartDeadlineReminderLogsNestedInputObjectSchema } from './TaskUpdateOneRequiredWithoutStartDeadlineReminderLogsNestedInput.schema';
import { ProjectUpdateOneWithoutStartDeadlineReminderLogsNestedInputObjectSchema as ProjectUpdateOneWithoutStartDeadlineReminderLogsNestedInputObjectSchema } from './ProjectUpdateOneWithoutStartDeadlineReminderLogsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  sentAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  recipientRole: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutStartDeadlineReminderLogsNestedInputObjectSchema).optional(),
  project: z.lazy(() => ProjectUpdateOneWithoutStartDeadlineReminderLogsNestedInputObjectSchema).optional()
}).strict();
export const StartDeadlineReminderLogUpdateInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogUpdateInput>;
export const StartDeadlineReminderLogUpdateInputObjectZodSchema = makeSchema();
