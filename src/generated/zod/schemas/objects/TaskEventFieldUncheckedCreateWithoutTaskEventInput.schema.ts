import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentUncheckedCreateNestedManyWithoutTaskEventFieldInputObjectSchema as AttachmentUncheckedCreateNestedManyWithoutTaskEventFieldInputObjectSchema } from './AttachmentUncheckedCreateNestedManyWithoutTaskEventFieldInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  data: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  attachments: z.lazy(() => AttachmentUncheckedCreateNestedManyWithoutTaskEventFieldInputObjectSchema).optional()
}).strict();
export const TaskEventFieldUncheckedCreateWithoutTaskEventInputObjectSchema: z.ZodType<Prisma.TaskEventFieldUncheckedCreateWithoutTaskEventInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldUncheckedCreateWithoutTaskEventInput>;
export const TaskEventFieldUncheckedCreateWithoutTaskEventInputObjectZodSchema = makeSchema();
