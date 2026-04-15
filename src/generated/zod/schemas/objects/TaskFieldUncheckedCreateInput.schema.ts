import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentUncheckedCreateNestedManyWithoutTaskFieldInputObjectSchema as AttachmentUncheckedCreateNestedManyWithoutTaskFieldInputObjectSchema } from './AttachmentUncheckedCreateNestedManyWithoutTaskFieldInput.schema';
import { LibraUncheckedCreateNestedOneWithoutTaskFieldInputObjectSchema as LibraUncheckedCreateNestedOneWithoutTaskFieldInputObjectSchema } from './LibraUncheckedCreateNestedOneWithoutTaskFieldInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  taskId: z.string(),
  pocketId: z.string().optional().nullable(),
  name: z.string(),
  data: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  attachments: z.lazy(() => AttachmentUncheckedCreateNestedManyWithoutTaskFieldInputObjectSchema),
  libra: z.lazy(() => LibraUncheckedCreateNestedOneWithoutTaskFieldInputObjectSchema).optional()
}).strict();
export const TaskFieldUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TaskFieldUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldUncheckedCreateInput>;
export const TaskFieldUncheckedCreateInputObjectZodSchema = makeSchema();
