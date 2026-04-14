import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskScalarWhereInputObjectSchema as TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema';
import { TaskUpdateManyMutationInputObjectSchema as TaskUpdateManyMutationInputObjectSchema } from './TaskUpdateManyMutationInput.schema';
import { TaskUncheckedUpdateManyWithoutProjectInputObjectSchema as TaskUncheckedUpdateManyWithoutProjectInputObjectSchema } from './TaskUncheckedUpdateManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TaskUpdateManyMutationInputObjectSchema), z.lazy(() => TaskUncheckedUpdateManyWithoutProjectInputObjectSchema)])
}).strict();
export const TaskUpdateManyWithWhereWithoutProjectInputObjectSchema: z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutProjectInput>;
export const TaskUpdateManyWithWhereWithoutProjectInputObjectZodSchema = makeSchema();
