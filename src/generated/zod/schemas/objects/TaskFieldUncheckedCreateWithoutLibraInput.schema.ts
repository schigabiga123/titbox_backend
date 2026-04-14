import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentUncheckedCreateNestedManyWithoutTaskFieldInputObjectSchema as AttachmentUncheckedCreateNestedManyWithoutTaskFieldInputObjectSchema } from './AttachmentUncheckedCreateNestedManyWithoutTaskFieldInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  taskId: z.string(),
  pocketId: z.string().optional().nullable(),
  name: z.string(),
  data: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  attachments: z.lazy(() => AttachmentUncheckedCreateNestedManyWithoutTaskFieldInputObjectSchema).optional()
}).strict();
export const TaskFieldUncheckedCreateWithoutLibraInputObjectSchema: z.ZodType<Prisma.TaskFieldUncheckedCreateWithoutLibraInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldUncheckedCreateWithoutLibraInput>;
export const TaskFieldUncheckedCreateWithoutLibraInputObjectZodSchema = makeSchema();
