import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  taskId: z.string(),
  name: z.string().optional().nullable(),
  status: z.string().optional(),
  createdAt: z.coerce.date().optional().nullable()
}).strict();
export const TaskEventUncheckedCreateWithoutFieldsInputObjectSchema: z.ZodType<Prisma.TaskEventUncheckedCreateWithoutFieldsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventUncheckedCreateWithoutFieldsInput>;
export const TaskEventUncheckedCreateWithoutFieldsInputObjectZodSchema = makeSchema();
