import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldUncheckedCreateNestedManyWithoutTaskEventInputObjectSchema as TaskEventFieldUncheckedCreateNestedManyWithoutTaskEventInputObjectSchema } from './TaskEventFieldUncheckedCreateNestedManyWithoutTaskEventInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable(),
  fields: z.lazy(() => TaskEventFieldUncheckedCreateNestedManyWithoutTaskEventInputObjectSchema).optional()
}).strict();
export const TaskEventUncheckedCreateWithoutTaskInputObjectSchema: z.ZodType<Prisma.TaskEventUncheckedCreateWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventUncheckedCreateWithoutTaskInput>;
export const TaskEventUncheckedCreateWithoutTaskInputObjectZodSchema = makeSchema();
