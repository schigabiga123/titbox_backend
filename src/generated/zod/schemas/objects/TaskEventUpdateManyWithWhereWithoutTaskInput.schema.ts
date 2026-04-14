import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventScalarWhereInputObjectSchema as TaskEventScalarWhereInputObjectSchema } from './TaskEventScalarWhereInput.schema';
import { TaskEventUpdateManyMutationInputObjectSchema as TaskEventUpdateManyMutationInputObjectSchema } from './TaskEventUpdateManyMutationInput.schema';
import { TaskEventUncheckedUpdateManyWithoutTaskInputObjectSchema as TaskEventUncheckedUpdateManyWithoutTaskInputObjectSchema } from './TaskEventUncheckedUpdateManyWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskEventScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TaskEventUpdateManyMutationInputObjectSchema), z.lazy(() => TaskEventUncheckedUpdateManyWithoutTaskInputObjectSchema)])
}).strict();
export const TaskEventUpdateManyWithWhereWithoutTaskInputObjectSchema: z.ZodType<Prisma.TaskEventUpdateManyWithWhereWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventUpdateManyWithWhereWithoutTaskInput>;
export const TaskEventUpdateManyWithWhereWithoutTaskInputObjectZodSchema = makeSchema();
