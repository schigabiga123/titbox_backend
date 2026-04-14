import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskFieldSelectObjectSchema as TaskFieldSelectObjectSchema } from './objects/TaskFieldSelect.schema';
import { TaskFieldIncludeObjectSchema as TaskFieldIncludeObjectSchema } from './objects/TaskFieldInclude.schema';
import { TaskFieldWhereUniqueInputObjectSchema as TaskFieldWhereUniqueInputObjectSchema } from './objects/TaskFieldWhereUniqueInput.schema';
import { TaskFieldCreateInputObjectSchema as TaskFieldCreateInputObjectSchema } from './objects/TaskFieldCreateInput.schema';
import { TaskFieldUncheckedCreateInputObjectSchema as TaskFieldUncheckedCreateInputObjectSchema } from './objects/TaskFieldUncheckedCreateInput.schema';
import { TaskFieldUpdateInputObjectSchema as TaskFieldUpdateInputObjectSchema } from './objects/TaskFieldUpdateInput.schema';
import { TaskFieldUncheckedUpdateInputObjectSchema as TaskFieldUncheckedUpdateInputObjectSchema } from './objects/TaskFieldUncheckedUpdateInput.schema';

export const TaskFieldUpsertOneSchema: z.ZodType<Prisma.TaskFieldUpsertArgs> = z.object({ select: TaskFieldSelectObjectSchema.optional(), include: TaskFieldIncludeObjectSchema.optional(), where: TaskFieldWhereUniqueInputObjectSchema, create: z.union([ TaskFieldCreateInputObjectSchema, TaskFieldUncheckedCreateInputObjectSchema ]), update: z.union([ TaskFieldUpdateInputObjectSchema, TaskFieldUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TaskFieldUpsertArgs>;

export const TaskFieldUpsertOneZodSchema = z.object({ select: TaskFieldSelectObjectSchema.optional(), include: TaskFieldIncludeObjectSchema.optional(), where: TaskFieldWhereUniqueInputObjectSchema, create: z.union([ TaskFieldCreateInputObjectSchema, TaskFieldUncheckedCreateInputObjectSchema ]), update: z.union([ TaskFieldUpdateInputObjectSchema, TaskFieldUncheckedUpdateInputObjectSchema ]) }).strict();