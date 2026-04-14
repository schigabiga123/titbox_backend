import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentCreateNestedManyWithoutTaskFieldInputObjectSchema as AttachmentCreateNestedManyWithoutTaskFieldInputObjectSchema } from './AttachmentCreateNestedManyWithoutTaskFieldInput.schema';
import { LibraCreateNestedOneWithoutTaskFieldInputObjectSchema as LibraCreateNestedOneWithoutTaskFieldInputObjectSchema } from './LibraCreateNestedOneWithoutTaskFieldInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  pocketId: z.string().optional().nullable(),
  name: z.string(),
  data: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  attachments: z.lazy(() => AttachmentCreateNestedManyWithoutTaskFieldInputObjectSchema).optional(),
  libra: z.lazy(() => LibraCreateNestedOneWithoutTaskFieldInputObjectSchema).optional()
}).strict();
export const TaskFieldCreateWithoutTaskInputObjectSchema: z.ZodType<Prisma.TaskFieldCreateWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldCreateWithoutTaskInput>;
export const TaskFieldCreateWithoutTaskInputObjectZodSchema = makeSchema();
