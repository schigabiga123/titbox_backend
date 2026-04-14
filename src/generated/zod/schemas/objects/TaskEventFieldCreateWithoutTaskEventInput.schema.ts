import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentCreateNestedManyWithoutTaskEventFieldInputObjectSchema as AttachmentCreateNestedManyWithoutTaskEventFieldInputObjectSchema } from './AttachmentCreateNestedManyWithoutTaskEventFieldInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  data: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  attachments: z.lazy(() => AttachmentCreateNestedManyWithoutTaskEventFieldInputObjectSchema).optional()
}).strict();
export const TaskEventFieldCreateWithoutTaskEventInputObjectSchema: z.ZodType<Prisma.TaskEventFieldCreateWithoutTaskEventInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldCreateWithoutTaskEventInput>;
export const TaskEventFieldCreateWithoutTaskEventInputObjectZodSchema = makeSchema();
