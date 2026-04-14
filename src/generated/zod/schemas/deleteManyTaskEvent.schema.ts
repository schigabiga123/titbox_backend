import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventWhereInputObjectSchema as TaskEventWhereInputObjectSchema } from './objects/TaskEventWhereInput.schema';

export const TaskEventDeleteManySchema: z.ZodType<Prisma.TaskEventDeleteManyArgs> = z.object({ where: TaskEventWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TaskEventDeleteManyArgs>;

export const TaskEventDeleteManyZodSchema = z.object({ where: TaskEventWhereInputObjectSchema.optional() }).strict();