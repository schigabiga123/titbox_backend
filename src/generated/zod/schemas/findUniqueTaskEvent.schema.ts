import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventSelectObjectSchema as TaskEventSelectObjectSchema } from './objects/TaskEventSelect.schema';
import { TaskEventIncludeObjectSchema as TaskEventIncludeObjectSchema } from './objects/TaskEventInclude.schema';
import { TaskEventWhereUniqueInputObjectSchema as TaskEventWhereUniqueInputObjectSchema } from './objects/TaskEventWhereUniqueInput.schema';

export const TaskEventFindUniqueSchema: z.ZodType<Prisma.TaskEventFindUniqueArgs> = z.object({ select: TaskEventSelectObjectSchema.optional(), include: TaskEventIncludeObjectSchema.optional(), where: TaskEventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TaskEventFindUniqueArgs>;

export const TaskEventFindUniqueZodSchema = z.object({ select: TaskEventSelectObjectSchema.optional(), include: TaskEventIncludeObjectSchema.optional(), where: TaskEventWhereUniqueInputObjectSchema }).strict();