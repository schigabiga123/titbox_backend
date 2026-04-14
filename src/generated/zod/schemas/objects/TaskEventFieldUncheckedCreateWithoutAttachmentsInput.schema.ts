import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  taskEventId: z.string(),
  name: z.string(),
  data: z.string().optional().nullable(),
  type: z.string().optional().nullable()
}).strict();
export const TaskEventFieldUncheckedCreateWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.TaskEventFieldUncheckedCreateWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldUncheckedCreateWithoutAttachmentsInput>;
export const TaskEventFieldUncheckedCreateWithoutAttachmentsInputObjectZodSchema = makeSchema();
