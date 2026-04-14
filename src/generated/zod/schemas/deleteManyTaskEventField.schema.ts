import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventFieldWhereInputObjectSchema as TaskEventFieldWhereInputObjectSchema } from './objects/TaskEventFieldWhereInput.schema';

export const TaskEventFieldDeleteManySchema: z.ZodType<Prisma.TaskEventFieldDeleteManyArgs> = z.object({ where: TaskEventFieldWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TaskEventFieldDeleteManyArgs>;

export const TaskEventFieldDeleteManyZodSchema = z.object({ where: TaskEventFieldWhereInputObjectSchema.optional() }).strict();