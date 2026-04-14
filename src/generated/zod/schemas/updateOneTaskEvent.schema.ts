import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventSelectObjectSchema as TaskEventSelectObjectSchema } from './objects/TaskEventSelect.schema';
import { TaskEventIncludeObjectSchema as TaskEventIncludeObjectSchema } from './objects/TaskEventInclude.schema';
import { TaskEventUpdateInputObjectSchema as TaskEventUpdateInputObjectSchema } from './objects/TaskEventUpdateInput.schema';
import { TaskEventUncheckedUpdateInputObjectSchema as TaskEventUncheckedUpdateInputObjectSchema } from './objects/TaskEventUncheckedUpdateInput.schema';
import { TaskEventWhereUniqueInputObjectSchema as TaskEventWhereUniqueInputObjectSchema } from './objects/TaskEventWhereUniqueInput.schema';

export const TaskEventUpdateOneSchema: z.ZodType<Prisma.TaskEventUpdateArgs> = z.object({ select: TaskEventSelectObjectSchema.optional(), include: TaskEventIncludeObjectSchema.optional(), data: z.union([TaskEventUpdateInputObjectSchema, TaskEventUncheckedUpdateInputObjectSchema]), where: TaskEventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TaskEventUpdateArgs>;

export const TaskEventUpdateOneZodSchema = z.object({ select: TaskEventSelectObjectSchema.optional(), include: TaskEventIncludeObjectSchema.optional(), data: z.union([TaskEventUpdateInputObjectSchema, TaskEventUncheckedUpdateInputObjectSchema]), where: TaskEventWhereUniqueInputObjectSchema }).strict();