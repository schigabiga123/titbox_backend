import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateNestedOneWithoutEventsInputObjectSchema as TaskCreateNestedOneWithoutEventsInputObjectSchema } from './TaskCreateNestedOneWithoutEventsInput.schema';
import { TaskEventFieldCreateNestedManyWithoutTaskEventInputObjectSchema as TaskEventFieldCreateNestedManyWithoutTaskEventInputObjectSchema } from './TaskEventFieldCreateNestedManyWithoutTaskEventInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutEventsInputObjectSchema),
  fields: z.lazy(() => TaskEventFieldCreateNestedManyWithoutTaskEventInputObjectSchema)
}).strict();
export const TaskEventCreateInputObjectSchema: z.ZodType<Prisma.TaskEventCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventCreateInput>;
export const TaskEventCreateInputObjectZodSchema = makeSchema();
