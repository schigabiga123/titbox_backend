import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateNestedOneWithoutFieldsInputObjectSchema as TaskCreateNestedOneWithoutFieldsInputObjectSchema } from './TaskCreateNestedOneWithoutFieldsInput.schema';
import { AttachmentCreateNestedManyWithoutTaskFieldInputObjectSchema as AttachmentCreateNestedManyWithoutTaskFieldInputObjectSchema } from './AttachmentCreateNestedManyWithoutTaskFieldInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  pocketId: z.string().optional().nullable(),
  name: z.string(),
  data: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutFieldsInputObjectSchema),
  attachments: z.lazy(() => AttachmentCreateNestedManyWithoutTaskFieldInputObjectSchema).optional()
}).strict();
export const TaskFieldCreateWithoutLibraInputObjectSchema: z.ZodType<Prisma.TaskFieldCreateWithoutLibraInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldCreateWithoutLibraInput>;
export const TaskFieldCreateWithoutLibraInputObjectZodSchema = makeSchema();
