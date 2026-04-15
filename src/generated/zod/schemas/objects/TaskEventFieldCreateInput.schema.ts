import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventCreateNestedOneWithoutFieldsInputObjectSchema as TaskEventCreateNestedOneWithoutFieldsInputObjectSchema } from './TaskEventCreateNestedOneWithoutFieldsInput.schema';
import { AttachmentCreateNestedManyWithoutTaskEventFieldInputObjectSchema as AttachmentCreateNestedManyWithoutTaskEventFieldInputObjectSchema } from './AttachmentCreateNestedManyWithoutTaskEventFieldInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  data: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  taskEvent: z.lazy(() => TaskEventCreateNestedOneWithoutFieldsInputObjectSchema),
  attachments: z.lazy(() => AttachmentCreateNestedManyWithoutTaskEventFieldInputObjectSchema)
}).strict();
export const TaskEventFieldCreateInputObjectSchema: z.ZodType<Prisma.TaskEventFieldCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldCreateInput>;
export const TaskEventFieldCreateInputObjectZodSchema = makeSchema();
