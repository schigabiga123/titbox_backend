import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldUncheckedCreateNestedManyWithoutTaskEventInputObjectSchema as TaskEventFieldUncheckedCreateNestedManyWithoutTaskEventInputObjectSchema } from './TaskEventFieldUncheckedCreateNestedManyWithoutTaskEventInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  taskId: z.string(),
  name: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable(),
  fields: z.lazy(() => TaskEventFieldUncheckedCreateNestedManyWithoutTaskEventInputObjectSchema)
}).strict();
export const TaskEventUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TaskEventUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventUncheckedCreateInput>;
export const TaskEventUncheckedCreateInputObjectZodSchema = makeSchema();
