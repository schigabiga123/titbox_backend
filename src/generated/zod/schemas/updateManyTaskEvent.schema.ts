import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventUpdateManyMutationInputObjectSchema as TaskEventUpdateManyMutationInputObjectSchema } from './objects/TaskEventUpdateManyMutationInput.schema';
import { TaskEventWhereInputObjectSchema as TaskEventWhereInputObjectSchema } from './objects/TaskEventWhereInput.schema';

export const TaskEventUpdateManySchema: z.ZodType<Prisma.TaskEventUpdateManyArgs> = z.object({ data: TaskEventUpdateManyMutationInputObjectSchema, where: TaskEventWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TaskEventUpdateManyArgs>;

export const TaskEventUpdateManyZodSchema = z.object({ data: TaskEventUpdateManyMutationInputObjectSchema, where: TaskEventWhereInputObjectSchema.optional() }).strict();