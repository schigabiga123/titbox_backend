import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldCreateNestedManyWithoutTaskEventInputObjectSchema as TaskEventFieldCreateNestedManyWithoutTaskEventInputObjectSchema } from './TaskEventFieldCreateNestedManyWithoutTaskEventInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  status: z.string().optional(),
  createdAt: z.coerce.date().optional().nullable(),
  fields: z.lazy(() => TaskEventFieldCreateNestedManyWithoutTaskEventInputObjectSchema).optional()
}).strict();
export const TaskEventCreateWithoutTaskInputObjectSchema: z.ZodType<Prisma.TaskEventCreateWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventCreateWithoutTaskInput>;
export const TaskEventCreateWithoutTaskInputObjectZodSchema = makeSchema();
