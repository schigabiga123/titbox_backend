import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventSelectObjectSchema as TaskEventSelectObjectSchema } from './objects/TaskEventSelect.schema';
import { TaskEventIncludeObjectSchema as TaskEventIncludeObjectSchema } from './objects/TaskEventInclude.schema';
import { TaskEventWhereUniqueInputObjectSchema as TaskEventWhereUniqueInputObjectSchema } from './objects/TaskEventWhereUniqueInput.schema';

export const TaskEventFindUniqueOrThrowSchema: z.ZodType<Prisma.TaskEventFindUniqueOrThrowArgs> = z.object({ select: TaskEventSelectObjectSchema.optional(), include: TaskEventIncludeObjectSchema.optional(), where: TaskEventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TaskEventFindUniqueOrThrowArgs>;

export const TaskEventFindUniqueOrThrowZodSchema = z.object({ select: TaskEventSelectObjectSchema.optional(), include: TaskEventIncludeObjectSchema.optional(), where: TaskEventWhereUniqueInputObjectSchema }).strict();