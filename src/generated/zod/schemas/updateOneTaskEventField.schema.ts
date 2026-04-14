import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventFieldSelectObjectSchema as TaskEventFieldSelectObjectSchema } from './objects/TaskEventFieldSelect.schema';
import { TaskEventFieldIncludeObjectSchema as TaskEventFieldIncludeObjectSchema } from './objects/TaskEventFieldInclude.schema';
import { TaskEventFieldUpdateInputObjectSchema as TaskEventFieldUpdateInputObjectSchema } from './objects/TaskEventFieldUpdateInput.schema';
import { TaskEventFieldUncheckedUpdateInputObjectSchema as TaskEventFieldUncheckedUpdateInputObjectSchema } from './objects/TaskEventFieldUncheckedUpdateInput.schema';
import { TaskEventFieldWhereUniqueInputObjectSchema as TaskEventFieldWhereUniqueInputObjectSchema } from './objects/TaskEventFieldWhereUniqueInput.schema';

export const TaskEventFieldUpdateOneSchema: z.ZodType<Prisma.TaskEventFieldUpdateArgs> = z.object({ select: TaskEventFieldSelectObjectSchema.optional(), include: TaskEventFieldIncludeObjectSchema.optional(), data: z.union([TaskEventFieldUpdateInputObjectSchema, TaskEventFieldUncheckedUpdateInputObjectSchema]), where: TaskEventFieldWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TaskEventFieldUpdateArgs>;

export const TaskEventFieldUpdateOneZodSchema = z.object({ select: TaskEventFieldSelectObjectSchema.optional(), include: TaskEventFieldIncludeObjectSchema.optional(), data: z.union([TaskEventFieldUpdateInputObjectSchema, TaskEventFieldUncheckedUpdateInputObjectSchema]), where: TaskEventFieldWhereUniqueInputObjectSchema }).strict();