import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { TaskUpdateOneRequiredWithoutLibraNestedInputObjectSchema as TaskUpdateOneRequiredWithoutLibraNestedInputObjectSchema } from './TaskUpdateOneRequiredWithoutLibraNestedInput.schema';
import { TaskFieldUpdateOneWithoutLibraNestedInputObjectSchema as TaskFieldUpdateOneWithoutLibraNestedInputObjectSchema } from './TaskFieldUpdateOneWithoutLibraNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  projectId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  szfCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  plateNumber: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  assignedUserId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  amount: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  manuallyLibra: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  manuallyLibraComment: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutLibraNestedInputObjectSchema).optional(),
  taskField: z.lazy(() => TaskFieldUpdateOneWithoutLibraNestedInputObjectSchema).optional()
}).strict();
export const LibraUpdateInputObjectSchema: z.ZodType<Prisma.LibraUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraUpdateInput>;
export const LibraUpdateInputObjectZodSchema = makeSchema();
