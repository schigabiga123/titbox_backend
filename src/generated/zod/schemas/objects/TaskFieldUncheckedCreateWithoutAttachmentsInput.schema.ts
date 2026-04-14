import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraUncheckedCreateNestedOneWithoutTaskFieldInputObjectSchema as LibraUncheckedCreateNestedOneWithoutTaskFieldInputObjectSchema } from './LibraUncheckedCreateNestedOneWithoutTaskFieldInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  taskId: z.string(),
  pocketId: z.string().optional().nullable(),
  name: z.string(),
  data: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  libra: z.lazy(() => LibraUncheckedCreateNestedOneWithoutTaskFieldInputObjectSchema).optional()
}).strict();
export const TaskFieldUncheckedCreateWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.TaskFieldUncheckedCreateWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldUncheckedCreateWithoutAttachmentsInput>;
export const TaskFieldUncheckedCreateWithoutAttachmentsInputObjectZodSchema = makeSchema();
