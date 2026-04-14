import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentUncheckedCreateNestedManyWithoutTaskEventFieldInputObjectSchema as AttachmentUncheckedCreateNestedManyWithoutTaskEventFieldInputObjectSchema } from './AttachmentUncheckedCreateNestedManyWithoutTaskEventFieldInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  taskEventId: z.string(),
  name: z.string(),
  data: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  attachments: z.lazy(() => AttachmentUncheckedCreateNestedManyWithoutTaskEventFieldInputObjectSchema)
}).strict();
export const TaskEventFieldUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TaskEventFieldUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldUncheckedCreateInput>;
export const TaskEventFieldUncheckedCreateInputObjectZodSchema = makeSchema();
