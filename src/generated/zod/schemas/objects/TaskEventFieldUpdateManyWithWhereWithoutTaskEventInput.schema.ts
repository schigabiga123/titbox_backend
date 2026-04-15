import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldScalarWhereInputObjectSchema as TaskEventFieldScalarWhereInputObjectSchema } from './TaskEventFieldScalarWhereInput.schema';
import { TaskEventFieldUpdateManyMutationInputObjectSchema as TaskEventFieldUpdateManyMutationInputObjectSchema } from './TaskEventFieldUpdateManyMutationInput.schema';
import { TaskEventFieldUncheckedUpdateManyWithoutTaskEventInputObjectSchema as TaskEventFieldUncheckedUpdateManyWithoutTaskEventInputObjectSchema } from './TaskEventFieldUncheckedUpdateManyWithoutTaskEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskEventFieldScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TaskEventFieldUpdateManyMutationInputObjectSchema), z.lazy(() => TaskEventFieldUncheckedUpdateManyWithoutTaskEventInputObjectSchema)])
}).strict();
export const TaskEventFieldUpdateManyWithWhereWithoutTaskEventInputObjectSchema: z.ZodType<Prisma.TaskEventFieldUpdateManyWithWhereWithoutTaskEventInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldUpdateManyWithWhereWithoutTaskEventInput>;
export const TaskEventFieldUpdateManyWithWhereWithoutTaskEventInputObjectZodSchema = makeSchema();
