import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldScalarWhereInputObjectSchema as TaskFieldScalarWhereInputObjectSchema } from './TaskFieldScalarWhereInput.schema';
import { TaskFieldUpdateManyMutationInputObjectSchema as TaskFieldUpdateManyMutationInputObjectSchema } from './TaskFieldUpdateManyMutationInput.schema';
import { TaskFieldUncheckedUpdateManyWithoutTaskInputObjectSchema as TaskFieldUncheckedUpdateManyWithoutTaskInputObjectSchema } from './TaskFieldUncheckedUpdateManyWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskFieldScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TaskFieldUpdateManyMutationInputObjectSchema), z.lazy(() => TaskFieldUncheckedUpdateManyWithoutTaskInputObjectSchema)])
}).strict();
export const TaskFieldUpdateManyWithWhereWithoutTaskInputObjectSchema: z.ZodType<Prisma.TaskFieldUpdateManyWithWhereWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldUpdateManyWithWhereWithoutTaskInput>;
export const TaskFieldUpdateManyWithWhereWithoutTaskInputObjectZodSchema = makeSchema();
