import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventSelectObjectSchema as TaskEventSelectObjectSchema } from './objects/TaskEventSelect.schema';
import { TaskEventIncludeObjectSchema as TaskEventIncludeObjectSchema } from './objects/TaskEventInclude.schema';
import { TaskEventWhereUniqueInputObjectSchema as TaskEventWhereUniqueInputObjectSchema } from './objects/TaskEventWhereUniqueInput.schema';
import { TaskEventCreateInputObjectSchema as TaskEventCreateInputObjectSchema } from './objects/TaskEventCreateInput.schema';
import { TaskEventUncheckedCreateInputObjectSchema as TaskEventUncheckedCreateInputObjectSchema } from './objects/TaskEventUncheckedCreateInput.schema';
import { TaskEventUpdateInputObjectSchema as TaskEventUpdateInputObjectSchema } from './objects/TaskEventUpdateInput.schema';
import { TaskEventUncheckedUpdateInputObjectSchema as TaskEventUncheckedUpdateInputObjectSchema } from './objects/TaskEventUncheckedUpdateInput.schema';

export const TaskEventUpsertOneSchema: z.ZodType<Prisma.TaskEventUpsertArgs> = z.object({ select: TaskEventSelectObjectSchema.optional(), include: TaskEventIncludeObjectSchema.optional(), where: TaskEventWhereUniqueInputObjectSchema, create: z.union([ TaskEventCreateInputObjectSchema, TaskEventUncheckedCreateInputObjectSchema ]), update: z.union([ TaskEventUpdateInputObjectSchema, TaskEventUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TaskEventUpsertArgs>;

export const TaskEventUpsertOneZodSchema = z.object({ select: TaskEventSelectObjectSchema.optional(), include: TaskEventIncludeObjectSchema.optional(), where: TaskEventWhereUniqueInputObjectSchema, create: z.union([ TaskEventCreateInputObjectSchema, TaskEventUncheckedCreateInputObjectSchema ]), update: z.union([ TaskEventUpdateInputObjectSchema, TaskEventUncheckedUpdateInputObjectSchema ]) }).strict();