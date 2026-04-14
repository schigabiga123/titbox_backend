import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskFieldSelectObjectSchema as TaskFieldSelectObjectSchema } from './objects/TaskFieldSelect.schema';
import { TaskFieldIncludeObjectSchema as TaskFieldIncludeObjectSchema } from './objects/TaskFieldInclude.schema';
import { TaskFieldUpdateInputObjectSchema as TaskFieldUpdateInputObjectSchema } from './objects/TaskFieldUpdateInput.schema';
import { TaskFieldUncheckedUpdateInputObjectSchema as TaskFieldUncheckedUpdateInputObjectSchema } from './objects/TaskFieldUncheckedUpdateInput.schema';
import { TaskFieldWhereUniqueInputObjectSchema as TaskFieldWhereUniqueInputObjectSchema } from './objects/TaskFieldWhereUniqueInput.schema';

export const TaskFieldUpdateOneSchema: z.ZodType<Prisma.TaskFieldUpdateArgs> = z.object({ select: TaskFieldSelectObjectSchema.optional(), include: TaskFieldIncludeObjectSchema.optional(), data: z.union([TaskFieldUpdateInputObjectSchema, TaskFieldUncheckedUpdateInputObjectSchema]), where: TaskFieldWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TaskFieldUpdateArgs>;

export const TaskFieldUpdateOneZodSchema = z.object({ select: TaskFieldSelectObjectSchema.optional(), include: TaskFieldIncludeObjectSchema.optional(), data: z.union([TaskFieldUpdateInputObjectSchema, TaskFieldUncheckedUpdateInputObjectSchema]), where: TaskFieldWhereUniqueInputObjectSchema }).strict();