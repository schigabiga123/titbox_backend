import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateNestedOneWithoutFieldsInputObjectSchema as TaskCreateNestedOneWithoutFieldsInputObjectSchema } from './TaskCreateNestedOneWithoutFieldsInput.schema';
import { LibraCreateNestedOneWithoutTaskFieldInputObjectSchema as LibraCreateNestedOneWithoutTaskFieldInputObjectSchema } from './LibraCreateNestedOneWithoutTaskFieldInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  pocketId: z.string().optional().nullable(),
  name: z.string(),
  data: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutFieldsInputObjectSchema),
  libra: z.lazy(() => LibraCreateNestedOneWithoutTaskFieldInputObjectSchema).optional()
}).strict();
export const TaskFieldCreateWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.TaskFieldCreateWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldCreateWithoutAttachmentsInput>;
export const TaskFieldCreateWithoutAttachmentsInputObjectZodSchema = makeSchema();
