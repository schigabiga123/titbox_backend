import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateNestedOneWithoutEventsInputObjectSchema as TaskCreateNestedOneWithoutEventsInputObjectSchema } from './TaskCreateNestedOneWithoutEventsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  status: z.string().optional(),
  createdAt: z.coerce.date().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutEventsInputObjectSchema)
}).strict();
export const TaskEventCreateWithoutFieldsInputObjectSchema: z.ZodType<Prisma.TaskEventCreateWithoutFieldsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventCreateWithoutFieldsInput>;
export const TaskEventCreateWithoutFieldsInputObjectZodSchema = makeSchema();
