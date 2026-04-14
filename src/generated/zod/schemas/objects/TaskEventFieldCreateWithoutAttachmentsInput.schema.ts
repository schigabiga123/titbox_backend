import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventCreateNestedOneWithoutFieldsInputObjectSchema as TaskEventCreateNestedOneWithoutFieldsInputObjectSchema } from './TaskEventCreateNestedOneWithoutFieldsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  data: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  taskEvent: z.lazy(() => TaskEventCreateNestedOneWithoutFieldsInputObjectSchema)
}).strict();
export const TaskEventFieldCreateWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.TaskEventFieldCreateWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldCreateWithoutAttachmentsInput>;
export const TaskEventFieldCreateWithoutAttachmentsInputObjectZodSchema = makeSchema();
