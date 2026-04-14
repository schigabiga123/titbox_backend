import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskFieldWhereInputObjectSchema as TaskFieldWhereInputObjectSchema } from './objects/TaskFieldWhereInput.schema';

export const TaskFieldDeleteManySchema: z.ZodType<Prisma.TaskFieldDeleteManyArgs> = z.object({ where: TaskFieldWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TaskFieldDeleteManyArgs>;

export const TaskFieldDeleteManyZodSchema = z.object({ where: TaskFieldWhereInputObjectSchema.optional() }).strict();